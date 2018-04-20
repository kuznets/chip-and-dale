import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ProductsModule } from './products/products.module';
import { HttpClientModule } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';
import { HttpService } from "./http.service";
import { FormsModule } from '@angular/forms';
import { CategoriesModule } from "./categories/categories.module";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CoreModule,
    SharedModule,
    CategoriesModule,
    ProductsModule,
    AppRoutingModule
  ],
  exports: [
  ],
  providers: [
    LocalStorageService,
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
