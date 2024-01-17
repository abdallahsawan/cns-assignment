import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAddEditComponent } from './component/user-add-edit/user-add-edit.component';
import { UserListComponent } from './component/user-list/user-list.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {UserRoutingModule} from "./user-routing.module";
import { UserComponent } from './user.component';
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import { AttachmentViewComponent } from './component/attachment-view/attachment-view.component';

@NgModule({
  declarations: [
    UserComponent,
    UserAddEditComponent,
    UserListComponent,
    AttachmentViewComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    UserRoutingModule,
    MatCardModule,
    MatGridListModule
  ]
})
export class UserModule { }
