import { Component } from '@angular/core';
import { Firestore, collection, doc, getDocs, deleteDoc, updateDoc, query, where } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-vertical',
  templateUrl: './weeklytasks.component.html',
})
export class WeeklyTasksComponent{
  public userId: string;
  public userName: string;
  public projectId: string;
  public weeklyTasksAuthor: any[] = [];
  public weeklyTasks: {[key: string]: {tasks: {id: string, title: string, description: string, status: string}[]}} = {};
  public currentWeek: number = this.getCurrentWeek(new Date());
  public currentYear: number = new Date().getFullYear();
  public years: number[] = Array.from({length: 10}, (v, k) => k + this.currentYear - 5);

  constructor(private firestore: Firestore, private auth: AngularFireAuth, private router: Router, private cdr: ChangeDetectorRef, private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService.currentTask$.subscribe((task: any) => {
      const currentTask = task;
      this.currentWeek = this.getCurrentWeek(currentTask.duedt.toDate());
    });
    this.auth.authState.subscribe(async (user) => {
      this.userId = user!.uid;
      await this.getUserDetails(this.userId).then((result: any) => {
        this.userName = result.name;
        this.projectId = result.projectId;
      });
      this.getWeeklyTasks();
    });
  }

  async getUserDetails(userId: string) {
    const q = query(collection(this.firestore, 'users'), where('uid', '==', userId));
    const snapshot = await getDocs(q);
    return snapshot.docs[0].data();
  }

  async getWeeklyTasks() {
    const q = query(collection(this.firestore, 'tasks'));
    const snapshot = await getDocs(q);
    snapshot.docs.filter(doc => this.getCurrentWeek(doc.data().duedt.toDate()) === this.currentWeek && doc.data().duedt.toDate().getFullYear() === this.currentYear && doc.data().projectId === this.projectId).map(doc => {
      if (!this.weeklyTasks[doc.data().userName]) this.weeklyTasks[doc.data().userName] = {tasks: []};
      this.weeklyTasks[doc.data().userName].tasks.push({ id: doc.id, title: doc.data().title, description: doc.data().description, status: doc.data().status, ...doc.data() });
    });
    this.weeklyTasksAuthor = Object.keys(this.weeklyTasks);
    this.cdr.detectChanges();
  }

  async deleteWeeklyTask(author: string, task: any) {
    if (author === this.userName) {
      // Construct a reference to the task document
      const taskRef = doc(this.firestore, 'tasks', task.id);
      // Delete the task document
      await deleteDoc(taskRef);
      this.weeklyTasks[author].tasks = this.weeklyTasks[author].tasks.filter((t: any) => t.id !== task.id);
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
    const foundTask = this.weeklyTasks[author].tasks.find((t: any) => t.id === task.id);
    if (foundTask) {
      foundTask.status = "Completed";
      this.cdr.detectChanges();
      alert("Task marked as 'Complete' successfully");
    }
  }

  getCurrentWeek(date: any) {
    const currentDate = (typeof date === 'object') ? date : new Date();
    const januaryFirst = new Date(currentDate.getFullYear(), 0, 1);
    const daysToNextMonday = (januaryFirst.getDay() === 1) ? 0 : (7 - januaryFirst.getDay()) % 7;
    const nextMonday = new Date(currentDate.getFullYear(), 0, januaryFirst.getDate() + daysToNextMonday);
 
    return (currentDate < nextMonday) ? 52 : (currentDate > nextMonday ? Math.ceil((currentDate.valueOf() - nextMonday.valueOf()) / (24 * 3600 * 1000) / 7) : 1);
  }

  onYearChange(event: any) {
    this.clear();
    this.currentYear = parseInt(event.target.value);
    this.getWeeklyTasks();
  }

  navigateToEditTask(task: any) {
    task.page = 'weekly';
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
  //     this.weeklyTasks[this.userName].tasks.push({ id: result._key.path.segments[1], ...payload })
  //     this.cdr.detectChanges();
  //   });
  // }

  next() {
    if (this.currentWeek < 52) {
      this.clear();
      this.currentWeek++;
      this.getWeeklyTasks();
    }
  }

  previous() {
    if (this.currentWeek > 1) {
      this.clear();
      this.currentWeek--;
      this.getWeeklyTasks();
    }
  }

  clear() {
    this.weeklyTasksAuthor = [];
    this.weeklyTasks = {};
  }
}
