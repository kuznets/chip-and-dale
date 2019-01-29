import { AuthInterceptor } from './auth/auth.interceptor';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialLoaderModule } from './material-loader/material-loader.module';
import { AuthModule } from './auth/auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { LocalStorageService } from './local-storage.service';
import { HttpService } from './http.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    MaterialLoaderModule,
    AuthModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  exports: [
    MaterialLoaderModule,
    AuthModule,
    FormsModule
  ],
  declarations: [
  ],
  providers: [
    LocalStorageService,
    HttpService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
})
export class CoreModule { }
