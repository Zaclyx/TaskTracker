import { Component } from '@angular/core';
import { Firestore, collection, getDocs, addDoc, query, where } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import 'firebase/database';
import { AuthService, ConfirmPasswordValidator } from 'src/app/modules/auth';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-vertical',
  templateUrl: './addtasks.component.html',
})
export class AddTasksComponent{
    taskForm: FormGroup;
    tasks: any;
    public userId: string;
    public title: string;
    public userName: string;
    public projectId: string;
    public weeklyTasksAuthor: any[] = [];
    public weeklyTasks: {[key: string]: {tasks: {id: string, title: string, description: string, status: string}[]}} = {};
    constructor(
      private fb: FormBuilder,
      private authService: AuthService,
      private router: Router,
      private firestore: Firestore, 
      private auth: AngularFireAuth, 
      private cdr: ChangeDetectorRef
    ) { }
   
    ngOnInit(): void {
      firebase.initializeApp(environment.firebase);
      this.initForm();
      this.auth.authState.subscribe(async (user) => {
        this.userId = user!.uid;
        await this.getUserDetails(this.userId).then((result: any) => {
          this.userName = result.name;
          this.projectId = result.projectId;
        });
      });
    }

    async getUserDetails(userId: string) {
      const q = query(collection(this.firestore, 'users'), where('uid', '==', userId));
      const snapshot = await getDocs(q);
      return snapshot.docs[0].data();
    }
      // convenience getter for easy access to form fields
      get f() {
        return this.taskForm.controls;
      }
   
      initForm() {
        this.taskForm = this.fb.group(
          {
            title: [
              '',
              Validators.compose([
                Validators.required,
              ]),
            ],
            description: [
              '',
              Validators.compose([
                Validators.required, 
              ]),
            ],
            status: [
              '',
              Validators.compose([
                Validators.required,
              ]),
            ],
            duedt: [
              "",
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
      const docRef = collection(this.firestore, 'tasks');
      const formValue = this.taskForm.value;
      const duedt = formValue.duedt ? new Date(formValue.duedt) : new Date();
      const payload = {
          userId: this.userId,
          userName: this.userName,
          title: formValue.title,
          description: formValue.description,
          status: formValue.status,
          projectId: this.projectId,
          duedt: duedt, // Due on 27th December 2024, 10:30 AM
          createddt: new Date(),
          updateddt: new Date()
      };
      addDoc(docRef, payload).then((result: any) => {
        alert("Task added successfully");
        // this.weeklyTasks[this.userName].tasks.push({ id: result._key.path.segments[1], ...payload })
        if (!this.weeklyTasks[this.userName]) {
          this.weeklyTasks[this.userName] = { tasks: [] };
        }

        // Now you can safely push the new task
        this.weeklyTasks[this.userName].tasks.push({
            id: result.id, // Assuming result.id is the correct way to access the generated id
            ...payload
        });
        this.cdr.detectChanges();
        this.router.navigate(['/weeklytasks']);
      });
    } else {
      alert("Form is not valid")
    }
  }
}
