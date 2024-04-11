import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WeeklyTasksComponent } from './weeklytasks.component';
import { WidgetsModule } from '../../_metronic/partials';

@NgModule({
  declarations: [WeeklyTasksComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: WeeklyTasksComponent,
      },
    ]),
    WidgetsModule,
  ],
})
export class WeeklyTasksModule {}