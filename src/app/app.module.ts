import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ProductsModule } from './products/products.module';
import { HttpClientModule } from "@angular/common/http";
import { LocalStorageService } from "./local-storage.service";
import { ApiWorkerService } from "./api-worker.service";
import {FormsModule} from "@angular/forms";


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
    ProductsModule,
    AppRoutingModule
  ],
  providers: [
    LocalStorageService,
    ApiWorkerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
