import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import {AppRoutingModules} from './app-routing.module';
import {AppComponent} from './app.component';
import {IndexComponent} from './index/index.component';
import {LoginComponent} from './login/login/login.component';
import {OverviewModule} from './overview/module';
import {AdminloginComponent} from './login/adminlogin/adminlogin.component';

import {LoginService} from './login/login/login.service';
import {AdminloginService} from './login/adminlogin/adminlogin.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndexComponent,
    AdminloginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModules,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    OverviewModule,
  ],
  providers: [LoginService, AdminloginService],
  bootstrap: [AppComponent]
})
export class AppModule {}
