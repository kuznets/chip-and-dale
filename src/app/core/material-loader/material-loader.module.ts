import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatFormFieldModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule
  ],
  declarations: []
})
export class MaterialLoaderModule { }
