import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileWidgetComponent } from './profile-widget/profile-widget.component';
import { ProfileOrdersComponent } from './profile-orders/profile-orders.component';
import { ProfileComponent } from './profile.component';
import {ProfileEditModule} from "./profile-edit/profile-edit.module";

@NgModule({
  imports: [
    CommonModule,
    ProfileEditModule,
    ProfileRoutingModule
  ],
  exports: [
    ProfileEditModule,
  ],
  declarations: [
    ProfileWidgetComponent,
    ProfileOrdersComponent,
    ProfileComponent
  ]
})
export class ProfileModule { }
