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
import {AdminOverviewComponent} from './Admin/admin-overview/admin-overview.component'
import {AddUserComponent} from './Admin/user/add-user/add-user.component';
import {AddCustomerComponent} from './Admin/customer/add-customer/add-customer.component';
import {AddProjectComponent} from './Admin/project/add-project/add-project.component';


import {LoginService} from './login/login/login.service';
import {AdminloginService} from './login/adminlogin/adminlogin.service';
import {ProjectsService} from './overview/projects.service';
import {AddUserService} from './Admin/user/add-user/add-user.service'
import {AddProjectsService} from './Admin/project/add-project/add-projects.service'
import {AddCustomersService} from './Admin/customer/add-customer/add-customers.service'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndexComponent,
    AdminloginComponent,
    AddUserComponent,
    AddCustomerComponent,
    AddProjectComponent,
    AdminOverviewComponent,
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
  providers: [LoginService,
    AdminloginService,
    ProjectsService,
    AddUserService,
    AddProjectsService,
    AddCustomersService],
  bootstrap: [AppComponent]
})
export class AppModule {}
