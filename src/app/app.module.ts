import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';
import { HttpService } from "./http.service";
import { CatalogModule } from "./catalog/catalog.module";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CoreModule,
    CatalogModule,
    SharedModule,
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
