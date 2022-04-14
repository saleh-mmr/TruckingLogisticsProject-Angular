import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicTableComponent } from './dynamic-table.component';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    DynamicTableComponent
  ],
  imports: [
    CommonModule,MatTableModule,MatFormFieldModule,MatInputModule
  ],exports:[DynamicTableComponent]
})
export class DynamicTableModule { }
