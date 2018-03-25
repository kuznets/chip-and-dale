import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileWidgetComponent } from './profile-widget/profile-widget.component';
import { ProfileOrdersComponent } from './profile-orders/profile-orders.component';
import {ProfileDetailComponent} from "./profile-detail/profile-detail.component";
import {ProfileDetailEditModule} from "./profile-detail-edit/profile-detail-edit.module";

@NgModule({
  imports: [
    CommonModule,
    ProfileModule,
    ProfileDetailComponent,
    ProfileDetailEditModule,
    ProfileOrdersComponent,
    ProfileWidgetComponent,
    ProfileRoutingModule
  ],
  exports: [
    ProfileModule,
    ProfileDetailComponent,
    ProfileDetailEditModule,
    ProfileOrdersComponent,
    ProfileWidgetComponent
  ],
  declarations: [ProfileWidgetComponent, ProfileOrdersComponent]
})
export class ProfileModule { }
