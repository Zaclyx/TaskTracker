import { Component, TemplateRef } from '@angular/core';
import { Firestore, doc, updateDoc } from '@angular/fire/firestore';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import 'firebase/database';
import { ConfirmPasswordValidator } from 'src/app/modules/auth';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-vertical',
  templateUrl: './edittask.component.html'
})

export class EditTaskComponent{
    taskForm: FormGroup;
    tasks: any;
    public currentTask: any;
    formError: TemplateRef<{ validation: string; message: string; control: AbstractControl<any,any>; }>|null;
    constructor(
      private fb: FormBuilder,
      private router: Router,
      private firestore: Firestore, 
      private sharedService: SharedService
    ) { }
   
    ngOnInit(): void {
      this.sharedService.currentTask$.subscribe((task: any) => {
        this.currentTask = task;
        this.initForm();
      });
    }

    // convenience getter for easy access to form fields
    get f() {
      return this.taskForm.controls;
    }
   
  initForm() {
    this.taskForm = this.fb.group(
      {
        title: [
          this.currentTask.title,
          Validators.compose([
            Validators.required,
          ]),
        ],
        description: [
          this.currentTask.description,
          Validators.compose([
            Validators.required, 
          ]),
        ],
        status: [
          this.currentTask.status,
          Validators.compose([
            Validators.required,
          ]),
        ],
        duedt: [
          new Date(this.currentTask.duedt.seconds * 1000),
          Validators.compose([
            Validators.required,
          ]),
        ],
        agree: [false, Validators.compose([Validators.required])],
      },
      {
        validator: ConfirmPasswordValidator.MatchPassword,
      }
    );
  }

  submit() {
  // Add a new document with a generated id.
  if (this.taskForm.valid) {
    const docRef = doc(this.firestore, 'tasks', this.currentTask.id);
    const formValue = this.taskForm.value;
    const duedt = formValue.duedt ? new Date(formValue.duedt) : new Date(this.currentTask.duedt.seconds * 1000);
    const payload = {
        userId: this.currentTask.userId,
        userName: this.currentTask.userName,
        title: formValue.title,
        description: formValue.description,
        status: formValue.status,
        projectId: this.currentTask.projectId,
        duedt: duedt, // Due on 27th December 2024, 10:30 AM
        createddt: new Date(this.currentTask.createddt.seconds * 1000),
        updateddt: new Date()
    };

    updateDoc(docRef, payload).then((result: any) => {
      alert("Task edited successfully");
      this.currentTask.page === 'monthly' ? this.router.navigate(['/monthlytasks']) : this.router.navigate(['/weeklytasks']);
    });
    } else {
      alert("Form is not valid");
    }
  }
}
