import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MonthlyTasksComponent } from './monthlytasks.component';
import { WidgetsModule } from '../../_metronic/partials';

@NgModule({
  declarations: [MonthlyTasksComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: MonthlyTasksComponent,
      },
    ]),
    WidgetsModule,
  ],
})
export class MonthlyTasksModule {}