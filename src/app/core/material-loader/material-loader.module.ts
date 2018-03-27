import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatFormFieldModule, MatToolbarModule, MatMenuModule, MatIconModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule
  ],
  declarations: []
})
export class MaterialLoaderModule { }
