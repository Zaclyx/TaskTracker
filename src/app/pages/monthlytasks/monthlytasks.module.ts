import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MonthlyTasksComponent } from './monthlytasks.component';
import { WidgetsModule } from '../../_metronic/partials';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { SharedModule } from 'src/app/_metronic/shared/shared.module';

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
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    InlineSVGModule,
    SharedModule,
  ],
})
export class MonthlyTasksModule {}
