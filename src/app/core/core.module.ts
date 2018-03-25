import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialLoaderModule } from './material-loader/material-loader.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialLoaderModule,
    AuthModule
  ],
  exports: [
    MaterialLoaderModule,
    AuthModule
  ],
  declarations: [

  ]
})
export class CoreModule { }
