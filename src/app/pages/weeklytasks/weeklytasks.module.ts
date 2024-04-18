import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WeeklyTasksComponent } from './weeklytasks.component';
import { WidgetsModule } from '../../_metronic/partials';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { SharedModule } from '../../_metronic/shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

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
    InlineSVGModule,
    SharedModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
  ],
})
export class WeeklyTasksModule {}
