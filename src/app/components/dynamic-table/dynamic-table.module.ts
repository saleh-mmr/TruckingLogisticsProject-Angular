import { MatIconModule } from '@angular/material/icon';
import { DetailModalComponent } from './../detail-modal/detail-modal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicTableComponent } from './dynamic-table.component';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    DynamicTableComponent,DetailModalComponent
  ],
  imports: [
    CommonModule,MatTableModule,MatFormFieldModule,MatInputModule,
    MatDialogModule,MatIconModule
  ],exports:[DynamicTableComponent]
})
export class DynamicTableModule { }
