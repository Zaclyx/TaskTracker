describe('Login Form Test', () => {
  beforeEach(() => {
    cy.visit('https://tasktracker-a5168.web.app/auth/login');
  });

  it('should display the login form', () => {
    cy.get('form#kt_login_signin_form').should('be.visible');
  });

  it('should fill in email and password fields', () => {
    cy.get('input[name="email"]').clear().type('zlyx1998@gmail.com');
    cy.get('input[name="password"]').clear().type('No@90601869');
  });

  it('should submit the form with valid credentials', () => {
    cy.get('input[name="email"]').clear().type('zlyx1998@gmail.com');
    cy.get('input[name="password"]').clear().type('No@90601869');
    cy.get('button#kt_sign_in_submit').click();
    cy.url().should('include', '/dashboard');
  });

  it('should display error messages for invalid inputs', () => {
    // Invalid email
    cy.get('input[name="email"]').clear();
    cy.get('input[name="password"]').clear();
    // cy.get('button#kt_sign_in_submit').click();
    cy.contains('Email is required').should('be.visible');
    cy.contains('Password is required').should('be.visible');

    // Invalid password (assuming minimum length is 3)
    cy.get('input[name="email"]').clear().type('your_email@example.com');
    cy.get('input[name="password"]').clear().type('12'); // less than minimum length
    cy.contains('Password should have at least 3 symbols').should('be.visible');
  });
});

describe('Dashboard', () => {
  beforeEach(() => {
    cy.visit('https://tasktracker-a5168.web.app/auth/login');
    cy.get('input[name="email"]').clear().type('zlyx1998@gmail.com');
    cy.get('input[name="password"]').clear().type('No@90601869');
    cy.get('button#kt_sign_in_submit').click();
  });

  it('displays the tasks summary', () => {
    cy.contains('Tasks Summary').should('exist');
    cy.contains('Current Project').should('exist');
    cy.contains('Test Project').should('exist'); // Make sure to replace {{ projectName }} with the actual project name value
  });

  it('navigates to weekly tasks when clicked', () => {
    cy.contains('Weekly Tasks').click({ force: true });
    cy.url().should('include', '/weeklytasks');
  });

  it('navigates to monthly tasks when clicked', () => {
    cy.contains('Monthly Tasks').click({ force: true });
    cy.url().should('include', '/monthlytasks');
  });

  it('displays tasks in progress', () => {
    cy.get('.card-title').contains('Tasks In Progress').should('exist');
    cy.get('.card-title')
      .contains('Tasks In Progress')
      .siblings('.text-muted')
      .invoke('text')
      .then((text) => {
        const taskCount = parseInt(text, 10);
        if (taskCount > 0) {
          cy.get('.card-body').should('exist');
        } else {
          cy.get('.card-body').should('contain', 'No Tasks In Progress');
        }
      });
  });

  it('displays overdue tasks', () => {
    cy.get('.card-title').contains('Overdue Tasks').should('exist');
    cy.get('.card-title')
      .contains('Overdue Tasks')
      .siblings('.text-muted')
      .invoke('text')
      .then((text) => {
        const taskCount = parseInt(text, 10);
        if (taskCount > 0) {
          cy.get('.card-body').should('exist');
        } else {
          cy.get('.card-body').should('contain', 'No Overdue Tasks');
        }
      });
  });

  it('displays completed tasks', () => {
    cy.get('.card-title').contains('Completed Tasks').should('exist');
    cy.get('.card-title')
      .contains('Completed Tasks')
      .siblings('.text-muted')
      .invoke('text')
      .then((text) => {
        const taskCount = parseInt(text, 10);
        if (taskCount > 0) {
          cy.get('.card-body').should('exist');
        } else {
          cy.get('.card-body').should('contain', 'No completed tasks');
        }
      });
  });
});

describe('Weekly Tasks Page', () => {
  beforeEach(() => {
    cy.visit('https://tasktracker-a5168.web.app/auth/login');
    cy.get('input[name="email"]').clear().type('zlyx1998@gmail.com');
    cy.get('input[name="password"]').clear().type('No@90601869');
    cy.get('button#kt_sign_in_submit').click();
    // Navigate to the Weekly Tasks page
    cy.get(
      '.menu-item[data-kt-menu-trigger="click"][routerLink="/weeklytasks"]'
    ).click({ force: true });
    cy.url().should('include', '/weeklytasks');
    const yearToSelect = '2024';

    // Find the select element containing the desired year
    cy.contains('.form-select', yearToSelect).select(yearToSelect);
    cy.wait(2000); // Adjust the time as needed
  });

  it('should add a new task when "Add Task" button is clicked', () => {
    // Click on the "Add Task" button
    cy.contains('Add Task').click();

    // Fill out the form
    cy.get('input[name="title"]').type('New Task Title');
    cy.get('textarea[name="description"]').type('New Task Description');
    cy.get('select[name="status"]').select('In Progress');

    // Get the current date
    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()}-${(
      currentDate.getMonth() + 1
    )
      .toString()
      .padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;

    // Input the formatted current date into the input field
    cy.get('input[formControlName="duedt"]').type(formattedDate, {
      force: true,
    });

    // Submit the form
    cy.get('button[type="submit"]').click();

    // Check if the new task is added
    cy.contains('.card', 'New Task Title').should('exist');
  });

  it('should navigate to edit task page when "Edit Task" button is clicked by the authorized user', () => {
    // Assuming there is at least one task available and the userName is authorized
    cy.get('a.btn-color-primary[title="Edit Task"]').first().click();
    // Assert navigation to edit task page
    cy.url().should('include', '/edittask');
  });

  it('should update a task when "Update Task" button is clicked', () => {
    // Click on the "Edit Task" button for the first task
    cy.get('a.btn-color-primary[title="Edit Task"]').first().click();

    // Assuming the form is prefilled with existing task details, update them
    cy.get('input[name="title"]').clear().type('Updated Task Title');
    cy.get('textarea[name="description"]')
      .clear()
      .type('Updated Task Description');
    cy.get('select[name="status"]').select('In Progress');

    // Get the current date
    const currentDate = new Date();
    const formattedNextDay = `${currentDate.getFullYear()}-${(
      currentDate.getMonth() + 1
    )
      .toString()
      .padStart(2, '0')}-${(currentDate.getDate() + 1)
      .toString()
      .padStart(2, '0')}`;

    // Input the formatted next day into the input field
    cy.get('input[formControlName="duedt"]')
      .clear()
      .type(formattedNextDay, { force: true });

    // Click on the "Update Task" button
    cy.contains('Update Task').click();

    // Check if the task details are updated
    cy.contains('Updated Task Title').should('exist');
    cy.contains('Updated Task Description').should('exist');
    cy.contains('In Progress').should('exist');
  });

  it('should mark a task as complete when "Mark as complete" button is clicked', () => {
    // Assuming there is at least one task available
    cy.get('.btn-active-light-success[title="Mark As Completed"]')
      .first()
      .click();
    cy.get('.badge').should('contain', 'Completed');
  });

  it('should delete a task when "Delete Task" button is clicked by the authorized user', () => {
    // Assuming there is at least one task available and the userName is authorized
    cy.get('.btn-active-light-danger[title="Delete Task"]')
      .first()
      .should('be.visible')
      .click();
  });
});

describe('Monthly Tasks Page', () => {
  beforeEach(() => {
    cy.visit('https://tasktracker-a5168.web.app/auth/login');
    cy.get('input[name="email"]').clear().type('zlyx1998@gmail.com');
    cy.get('input[name="password"]').clear().type('No@90601869');
    cy.get('button#kt_sign_in_submit').click();
    // Navigate to the Weekly Tasks page
    cy.get(
      '.menu-item[data-kt-menu-trigger="click"][routerLink="/monthlytasks"]'
    ).click({ force: true });
    cy.url().should('include', '/monthlytasks');
    const yearToSelect = '2024';

    // Find the select element containing the desired year
    cy.contains('.form-select', yearToSelect).select(yearToSelect);

    cy.wait(2000); // Adjust the time as needed
  });

  it('should add a new task when "Add Task" button is clicked', () => {
    // Click on the "Add Task" button
    cy.contains('Add Task').click();

    // Fill out the form
    cy.get('input[name="title"]').type('New Task Title');
    cy.get('textarea[name="description"]').type('New Task Description');
    cy.get('select[name="status"]').select('In Progress');
    // Get the current date
    const currentDate = new Date();

    // Format the current date as 'YYYY-MM-DD'
    const formattedDate = `${currentDate.getFullYear()}-${(
      currentDate.getMonth() + 1
    )
      .toString()
      .padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;

    // Input the formatted current date into the input field
    cy.get('input[formControlName="duedt"]').type(formattedDate, {
      force: true,
    });
    // Submit the form
    cy.get('button[type="submit"]').click();

    // Check if the new task is added
    cy.contains('New Task Title').should('exist');
  });

  it('should navigate to edit task page when "Edit Task" button is clicked by the authorized user', () => {
    // Assuming there is at least one task available and the userName is authorized
    cy.get('a.btn-color-primary[title="Edit Task"]').first().click();
    // Assert navigation to edit task page
    cy.url().should('include', '/edittask');
  });

  it('should update a task when "Update Task" button is clicked', () => {
    // Click on the "Edit Task" button for the first task
    cy.get('a.btn-color-primary[title="Edit Task"]').first().click();

    // Assuming the form is prefilled with existing task details, update them
    cy.get('input[name="title"]').clear().type('Updated Task Title');
    cy.get('textarea[name="description"]')
      .clear()
      .type('Updated Task Description');
    cy.get('select[name="status"]').select('In Progress');
    // Get the current date
    const currentDate = new Date();

    // Add one day to the current date
    const nextDay = new Date(currentDate);
    nextDay.setDate(currentDate.getDate() + 1);

    // Format the next day as 'YYYY-MM-DD'
    const formattedNextDay = `${nextDay.getFullYear()}-${(
      nextDay.getMonth() + 1
    )
      .toString()
      .padStart(2, '0')}-${nextDay.getDate().toString().padStart(2, '0')}`;

    // Input the formatted next day into the input field
    cy.get('input[formControlName="duedt"]').clear().type(formattedNextDay, {
      force: true,
    });

    // Click on the "Update Task" button
    cy.contains('Update Task').click();

    // Check if the task details are updated
    cy.contains('Updated Task Title').should('exist');
    cy.contains('Updated Task Description').should('exist');
    cy.contains('In Progress').should('exist');
  });

  it('should mark a task as complete when "Mark as complete" button is clicked', () => {
    // Assuming there is at least one task available
    cy.get('.btn-active-light-success[title="Mark As Completed"]')
      .first()
      .click();
    cy.get('.badge').should('contain', 'Completed');
  });

  it('should delete a task when "Delete Task" button is clicked by the authorized user', () => {
    // Assuming there is at least one task available and the userName is authorized
    cy.get('.btn-active-light-danger[title="Delete Task"]').first().click();
  });
});
