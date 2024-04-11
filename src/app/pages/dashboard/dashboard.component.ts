import {
  Component,
  OnInit,
  EventEmitter,
  ChangeDetectorRef,
} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import moment from 'moment';
import { Observable, Timestamp } from 'rxjs';
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
    private cdr: ChangeDetectorRef
  ) {}

  uid: string;
  username: string;
  userInProgressTasks$: Observable<any[]>;
  userUpcomingTasks$: Observable<any[]>;
  userCompletedTasks$: Observable<any[]>;

  ngOnInit(): void {
    this.getUid();
  }

  getUid() {
    this.auth.authState.subscribe((user) => {
      if (user) {
        this.uid = user.uid || '';
      } else {
        this.uid = '';
      }
      this.getTasks();
    });
  }

  getTasks() {
    this.userInProgressTasks$ = this.service.getTasks(this.uid, 'In Progress');
    this.userCompletedTasks$ = this.service.getTasks(this.uid, 'Completed');
    this.cdr.detectChanges();
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

      console.log('Difference in days:', differenceInDays);

      return differenceInDays;
    } else {
      return differenceInDays;
    }
  }
}
