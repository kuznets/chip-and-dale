import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialLoaderModule} from "./material-loader/material-loader.module";

@NgModule({
  imports: [
    CommonModule,
    MaterialLoaderModule
  ],
  exports: [
    MaterialLoaderModule
  ],
  declarations: [

  ]
})
export class CoreModule { }
