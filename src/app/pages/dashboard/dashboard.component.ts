import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { ReminderClassDTO } from 'src/app/sharedInterfaceDTO/reminderInterfaceDTO';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private service: SharedService,
  ) {}

  ngOnInit(): void {

    const reminderClassDTO = new ReminderClassDTO( 
      'Not Used',
      'Team Goals',
      'Test@test.com',
      'YEARLY',
      '2024',
      '0',
      '0'
    ); 

    this.service.getListOfReminders("TestUser1","WEEKLY","01").subscribe(res => console.log(res));
    this.service.getListOfRemindersMetaData("YEARLY").subscribe(res => console.log(res));
    
    // this.service.createReminder(reminderClassDTO);
  }
}
