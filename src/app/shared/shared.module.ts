import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthModule } from "../auth/auth.module";
import { CatalogModule } from "../catalog/catalog.module";
import { CartModule } from "../cart/cart.module";
import { ProfileModule } from "../profile/profile.module";
import { AdminModule } from "../admin/admin.module";

@NgModule({
  imports: [
    CommonModule,
    AuthModule,
    CatalogModule,
    CartModule,
    ProfileModule,
    AdminModule
  ],
  exports: [
    AuthModule,
    CatalogModule,
    CartModule,
    ProfileModule,
    AdminModule
  ],
  declarations: []
})
export class SharedModule { }
