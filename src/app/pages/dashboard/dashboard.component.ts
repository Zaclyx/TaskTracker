import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { SharedService } from 'src/app/shared.service';
import * as moment from 'moment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public userEmail: string;
  public week: string;
  public year: string;
  public month: string;
  public weeklyDashboardData: any[];
  public monthlyDashboardData: any[];
  public yearlyDashboardData: any[];

  constructor(
    private service: SharedService,
    private auth: AngularFireAuth,
  ) {}

  ngOnInit(): void {
    this.week = moment().format('WW');
    this.month = moment().format('MM');
    this.year = moment().format('gggg');
    this.auth.authState.subscribe((user) => {
      if (user) {
        this.userEmail = user.email || "";
      } else {
        this.userEmail = "";
      }
      console.log(this.userEmail);
      this.service.getListOfReminders(this.userEmail,"WEEKLY", this.week).subscribe(res => {console.log(res); this.weeklyDashboardData = res;} );
      this.service.getListOfReminders(this.userEmail,"MONTHLY", this.month).subscribe(res => {console.log(res); this.monthlyDashboardData = res;});
      this.service.getListOfReminders(this.userEmail,"YEARLY", this.year).subscribe(res => {console.log(res); this.yearlyDashboardData = res;});
    })

    // this.service.getListOfRemindersMetaData("YEARLY").subscribe(res => console.log(res));
    
    // this.service.createReminder(reminderClassDTO);
  }
}
