import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileWidgetComponent } from './profile-widget/profile-widget.component';
import { ProfileOrdersComponent } from './profile-orders/profile-orders.component';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule
  ],
  declarations: [ProfileWidgetComponent, ProfileOrdersComponent]
})
export class ProfileModule { }
