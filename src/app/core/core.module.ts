import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialLoaderModule } from './material-loader/material-loader.module';
import { AuthModule } from './auth/auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { LocalStorageService } from './local-storage.service';
import { HttpService } from './http.service';
import { MatAutocompleteModule } from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MaterialLoaderModule,
    MatAutocompleteModule,
    AuthModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  exports: [
    MaterialLoaderModule,
    MatAutocompleteModule,
    AuthModule,
    FormsModule
  ],
  declarations: [
  ],
  providers: [
    LocalStorageService,
    HttpService
  ],
})
export class CoreModule { }
