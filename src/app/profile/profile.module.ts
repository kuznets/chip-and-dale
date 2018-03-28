import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileWidgetComponent } from './components/profile-widget/profile-widget.component';
import { ProfileOrdersComponent } from './components/profile-orders/profile-orders.component';
import {ProfileDetailComponent} from "./components/profile-detail/profile-detail.component";
import {ProfileDetailEditModule} from "./components/profile-detail-edit/profile-detail-edit.module";

@NgModule({
  imports: [
    CommonModule,
    ProfileDetailEditModule,
    ProfileRoutingModule
  ],
  exports: [
    ProfileDetailEditModule,
  ],
  declarations: [ProfileWidgetComponent, ProfileDetailComponent, ProfileOrdersComponent]
})
export class ProfileModule { }
