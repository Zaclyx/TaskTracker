import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WeeklyTaskComponent } from './weeklytasks.component';
import { WidgetsModule } from '../../_metronic/partials';

@NgModule({
  declarations: [WeeklyTaskComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: WeeklyTaskComponent,
      },
    ]),
    WidgetsModule,
  ],
})
export class WeeklyTasksModule {}