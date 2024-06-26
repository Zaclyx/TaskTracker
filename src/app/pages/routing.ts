import { Routes } from '@angular/router';

const Routing: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'builder',
    loadChildren: () =>
      import('./builder/builder.module').then((m) => m.BuilderModule),
  },
  {
    path: 'crafted/pages/profile',
    loadChildren: () =>
      import('../modules/profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: 'crafted/account',
    loadChildren: () =>
      import('../modules/account/account.module').then((m) => m.AccountModule),
  },
  {
    path: 'crafted/widgets',
    loadChildren: () =>
      import('../modules/widgets-examples/widgets-examples.module').then(
        (m) => m.WidgetsExamplesModule
      ),
  },
  {
    path: 'apps/chat',
    loadChildren: () =>
      import('../modules/apps/chat/chat.module').then((m) => m.ChatModule),
  },
  {
    path: 'weeklytasks',
    loadChildren: () =>
      import('./weeklytasks/weeklytasks.module').then((m) => m.WeeklyTasksModule),
  },
  {
    path: 'monthlytasks',
    loadChildren: () =>
      import('./monthlytasks/monthlytasks.module').then((m) => m.MonthlyTasksModule),
  },
  {
    path: 'addtasks',
    loadChildren: () =>
      import('./addtasks/addtasks.module').then((m) => m.AddTasksModule),
  },
  {
    path: 'edittask',
    loadChildren: () =>
      import('./edittask/edittask.module').then((m) => m.EditTaskModule),
  },
  {
    path: 'goals',
    loadChildren: () =>
      import('./goals/goals.module').then((m) => m.GoalsModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'error/404',
  },
];

export { Routing };
