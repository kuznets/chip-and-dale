import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../core/core.module';
import { CartModule } from '../cart/cart.module';
import { ProfileModule } from '../profile/profile.module';
import { AdminModule } from '../admin/admin.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { SearchComponent } from './components/search/search.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from "@angular/forms";
import { MatAutocompleteModule } from "@angular/material";

@NgModule({
  imports: [
    CoreModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    CommonModule,
    CartModule,
    ProfileModule,
    AdminModule,
    RouterModule
  ],
  exports: [
    CartModule,
    MatAutocompleteModule,
    ProfileModule,
    AdminModule,
    NavBarComponent,
    MainMenuComponent,
    SearchComponent,
    FooterComponent
  ],
  declarations: [
    NavBarComponent,
    MainMenuComponent,
    SearchComponent,
    FooterComponent
  ]
})
export class SharedModule { }
