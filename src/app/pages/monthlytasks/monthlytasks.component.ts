import { Component } from '@angular/core';
import { Firestore, collection, doc, getDocs, deleteDoc, updateDoc, query, where } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-vertical',
  templateUrl: './monthlytasks.component.html',
})
export class MonthlyTasksComponent{
  public userId: string;
  public userName: string;
  public projectId: string;
  public monthlyTasksAuthor: any[] = [];
  public monthlyTasks: {[key: string]: {tasks: {id: string, title: string, description: string, status: string}[]}} = {};
  public months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  public currentMonth: number = new Date().getMonth();
  public currentYear: number = new Date().getFullYear();
  public years: number[] = Array.from({length: 10}, (v, k) => k + this.currentYear - 5);

  constructor(private firestore: Firestore, private auth: AngularFireAuth, private router: Router, private cdr: ChangeDetectorRef, private sharedService: SharedService) {}

  ngOnInit() {
    this.auth.authState.subscribe(async (user) => {
      this.userId = user!.uid;
      await this.getUserDetails(this.userId).then((result: any) => {
        this.userName = result.name;
        this.projectId = result.projectId;
      });
      this.getMonthlyTasks();
    });
  }

  async getUserDetails(userId: string) {
    const q = query(collection(this.firestore, 'users'), where('uid', '==', userId));
    const snapshot = await getDocs(q);
    return snapshot.docs[0].data();
  }

  async getMonthlyTasks() {
    const q = query(collection(this.firestore, 'tasks'));
    const snapshot = await getDocs(q);
    snapshot.docs.filter(doc => doc.data().duedt.toDate().getMonth() === this.currentMonth && doc.data().duedt.toDate().getFullYear() === this.currentYear && doc.data().projectId === this.projectId).map(doc => {
      if (!this.monthlyTasks[doc.data().userName]) this.monthlyTasks[doc.data().userName] = {tasks: []};
      this.monthlyTasks[doc.data().userName].tasks.push({ id: doc.id, title: doc.data().title, description: doc.data().description, status: doc.data().status, ...doc.data() });
    });
    this.monthlyTasksAuthor = Object.keys(this.monthlyTasks);
    this.cdr.detectChanges();
  }

  async deleteWeeklyTask(author: string, task: any) {
    if (author === this.userName) {
      // Construct a reference to the task document
      const taskRef = doc(this.firestore, 'tasks', task.id);
      // Delete the task document
      await deleteDoc(taskRef);
      this.monthlyTasks[author].tasks = this.monthlyTasks[author].tasks.filter((t: any) => t.id !== task.id);
      if (this.monthlyTasks[author].tasks.length === 0) this.monthlyTasksAuthor = this.monthlyTasksAuthor.filter((a: string) => a !== author);
      this.cdr.detectChanges();
      alert("Task deleted successfully");
    }
    else {
      alert("You are not authorized to delete this task");
    }
  }

  async markAsComplete(author: string, task: any) {
    const docRef = doc(this.firestore, 'tasks', task.id);
    await updateDoc(docRef, {"status": "Completed", "updateddt": new Date() });
    const foundTask = this.monthlyTasks[author].tasks.find((t: any) => t.id === task.id);
    if (foundTask) {
      foundTask.status = "Completed";
      this.cdr.detectChanges();
      alert("Task marked as 'Complete' successfully");
    }
  }

  onYearChange(event: any) {
    this.clear();
    this.currentYear = parseInt(event.target.value);
    this.getMonthlyTasks();
  }

  navigateToEditTask(task: any) {
    task.page = 'monthly';
    this.sharedService.setCurrentTask(task);
    this.router.navigate(['/edittask']);
  }

  // addTask() {
  //   // Add a new document with a generated id.
  //   const docRef = collection(this.firestore, 'tasks');
  //   const payload = {
  //     userId: this.userId,
  //     userName: this.userName,
  //     title: 'Finish Documentation',
  //     description: 'Test description',
  //     status: 'In Progress',
  //     projectId: this.projectId,
  //     duedt: new Date(2024, 11, 27, 10, 30, 0), // Due on 27th December 2024, 10:30 AM
  //     createddt: new Date(),
  //     updateddt: new Date()
  //   };
  //   addDoc(docRef, payload).then((result: any) => {
  //     alert("Task added successfully");
  //     this.monthlyTasks[this.userName].tasks.push({ id: result._key.path.segments[1], ...payload })
  //     this.cdr.detectChanges();
  //   });
  // }

  next() {
    if (this.currentMonth < 11) {
      this.clear();
      this.currentMonth++;
      this.getMonthlyTasks();
    }
  }

  previous() {
    if (this.currentMonth > 0) {
      this.clear();
      this.currentMonth--;
      this.getMonthlyTasks();
    }
  }

  clear() {
    this.monthlyTasksAuthor = [];
    this.monthlyTasks = {};
  }
}
