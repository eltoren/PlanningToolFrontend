import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';


import {AppRoutingModules} from './app-routing.module';
import {AppComponent} from './app.component';
import {IndexComponent} from './index/index.component';
import {LoginComponent} from './login/login/login.component';
import {OverviewComponent} from './overview/overview.component';
import {AdminloginComponent} from './login/adminlogin/adminlogin.component';

import {LoginService} from './login/login/login.service';
import {AdminloginService} from './login/adminlogin/adminlogin.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OverviewComponent,
    IndexComponent,
    AdminloginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModules,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [LoginService, AdminloginService],
  bootstrap: [AppComponent]
})
export class AppModule {}
