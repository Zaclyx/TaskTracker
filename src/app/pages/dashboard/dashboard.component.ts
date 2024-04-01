import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

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
    this.service.getTasks().subscribe((res) => {
      const testData = res;
      console.log(testData);
    })
  }
}
