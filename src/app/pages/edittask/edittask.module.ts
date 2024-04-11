import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EditTaskComponent } from './edittask.component';
import { WidgetsModule } from '../../_metronic/partials';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerToggleIcon } from '@angular/material/datepicker';

@NgModule({
  declarations: [EditTaskComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatDatepickerToggleIcon,
    RouterModule.forChild([
      {
        path: '',
        component: EditTaskComponent,
      },
    ]),
    WidgetsModule,
  ],
  providers: [provideNativeDateAdapter()]
})
export class EditTaskModule {}