import {
  Component,
  OnInit,
  ChangeDetectorRef,
} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ITimestamp } from 'src/app/modules/models/task.model';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private service: SharedService,
    private auth: AngularFireAuth,
    private cdr: ChangeDetectorRef,
    private sharedService: SharedService,
    private router: Router
  ) {}

  uid: string;
  projectId: string;
  username: string;
  userInProgressTasks$: Observable<any[]>;
  userOverdueTasks$: Observable<any[]>;
  userCompletedTasks$: Observable<any[]>;

  ngOnInit(): void {
    this.service.checkAndUpdateDueDates();
    this.getUid();
  }

  getUid() {
    this.auth.authState.subscribe((user) => {
      if (user) {
        this.uid = user.uid || '';
      } else {
        this.uid = '';
      }
      this.service.getUserDetails(this.uid).then((results) => {
        this.projectId = results.projectId;
        this.getTasks();
      });
    });
  }

  getTasks() {
    this.userInProgressTasks$ = this.service.getTasks(
      this.projectId,
      'In Progress'
    );
    this.userCompletedTasks$ = this.service.getTasks(
      this.projectId,
      'Completed'
    );
    this.userOverdueTasks$ = this.service.getTasks(this.projectId, 'Overdue');
    this.cdr.detectChanges();
  }

  navigateToWeeklyTask(task: any) {
    this.sharedService.setCurrentTask(task);
    this.router.navigate(['/weeklytasks']);
  }

  formatDate(duedt: ITimestamp): number {
    let differenceInDays = 0;

    if (duedt.seconds) {
      const milliseconds = duedt.seconds * 1000;
      const providedDate = new Date(milliseconds);
      const currentDate = new Date();

      const differenceInMilliseconds =
        providedDate.getTime() - currentDate.getTime();

      differenceInDays = Math.floor(
        differenceInMilliseconds / (1000 * 60 * 60 * 24)
      );
      return differenceInDays;
    } else {
      return differenceInDays;
    }
  }

  formatOverdueDate(duedt: ITimestamp): number {
    let differenceInDays = 0;

    if (duedt.seconds) {
      const milliseconds = duedt.seconds * 1000;
      const providedDate = new Date(milliseconds);
      const currentDate = new Date();

      const differenceInMilliseconds =
        providedDate.getTime() - currentDate.getTime();

      differenceInDays = Math.floor(
        differenceInMilliseconds / (1000 * 60 * 60 * 24)
      );
      return -differenceInDays;
    } else {
      return differenceInDays;
    }
  }
}
