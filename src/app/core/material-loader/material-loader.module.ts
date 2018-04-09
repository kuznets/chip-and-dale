import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatGridListModule,
  MatListModule,
  MatCardModule,
  MatPaginatorModule,
  MatSelectModule,
  MatTableModule,
  MatDialogModule,
  MatInputModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatGridListModule,
    MatListModule,
    MatCardModule,
    MatPaginatorModule,
    MatSelectModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatGridListModule,
    MatListModule,
    MatCardModule,
    MatPaginatorModule,
    MatSelectModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule
  ],
  declarations: []
})
export class MaterialLoaderModule { }
