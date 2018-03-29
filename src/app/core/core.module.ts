import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialLoaderModule } from './material-loader/material-loader.module';
import { AuthModule } from './auth/auth.module';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    MaterialLoaderModule,
    AuthModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  exports: [
    MaterialLoaderModule,
    AuthModule,
    FormsModule
  ],
  declarations: [

  ]
})
export class CoreModule { }
