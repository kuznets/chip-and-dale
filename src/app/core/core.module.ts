import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialImportsModule} from "./material-imports/material-imports.module";

@NgModule({
  imports: [
    CommonModule,
    MaterialImportsModule
  ],
  exports: [
    MaterialImportsModule
  ],
  declarations: []
})
export class CoreModule { }
