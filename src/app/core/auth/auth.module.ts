import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import {MaterialLoaderModule} from "../material-loader/material-loader.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialLoaderModule,
    ReactiveFormsModule
  ],
  declarations: [
    SigninComponent,
    SignupComponent
  ],
  entryComponents: [SigninComponent]
})
export class AuthModule { }
