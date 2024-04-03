import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MonthlyTasksComponent } from './monthlytasks/monthlytasks.component';
import { WeeklyTaskComponent } from './weeklytasks/weeklytasks.component';
import { WizardsComponent } from './wizards.component';

const routes: Routes = [
  {
    path: '',
    component: WizardsComponent,
    children: [
      {
        path: 'monthlytasks',
        component: MonthlyTasksComponent,
      },
      {
        path: 'weeklytasks',
        component: WeeklyTaskComponent,
      },
      // { path: '', redirectTo: 'horizontal', pathMatch: 'full' },
      // { path: '**', redirectTo: 'horizontal', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WizardsRoutingModule {}
