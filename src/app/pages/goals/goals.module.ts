import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GoalsComponent } from './goals.component';
import { WidgetsModule } from '../../_metronic/partials';

@NgModule({
  declarations: [GoalsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: GoalsComponent,
      },
    ]),
    WidgetsModule,
  ],
})
export class GoalsModule {}