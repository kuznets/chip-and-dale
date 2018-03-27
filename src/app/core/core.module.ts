import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialLoaderModule } from './material-loader/material-loader.module';
import { AuthModule } from './auth/auth.module';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    CommonModule,
    MaterialLoaderModule,
    AuthModule,
    BrowserAnimationsModule
  ],
  exports: [
    MaterialLoaderModule,
    AuthModule
  ],
  declarations: [

  ]
})
export class CoreModule { }
