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
import {UserOverviewComponent} from './Admin/user/user-overview/user-overview.component'
import {ProjectOverviewComponent} from './Admin/project/project-overview/project-overview.component';
import {CustomersOverviewComponent} from './Admin/customer/customers-overview/customers-overview.component';
import {EditUserComponent} from './Admin/user/edit-user/edit-user.component';
import {EditCustomerComponent} from './Admin/customer/edit-customer/edit-customer.component';
import {EditProjectComponent} from './Admin/project/edit-project/edit-project.component'


import {LoginService} from './login/login/login.service';
import {AdminloginService} from './login/adminlogin/adminlogin.service';
import {OverviewService} from './overview/Overview.service';
import {AddUserService} from './Admin/user/add-user/add-user.service'
import {AddProjectsService} from './Admin/project/add-project/add-projects.service'
import {AddCustomersService} from './Admin/customer/add-customer/add-customers.service';
import {EditUserService} from './Admin/user/edit-user/edit-user.service';
import {EditProjectService} from './Admin/project/edit-project/edit-project.service'
import {EditCustomerService} from './Admin/customer/edit-customer/edit-customer.service'






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
    UserOverviewComponent,
    ProjectOverviewComponent,
    CustomersOverviewComponent,
    EditUserComponent,
    EditCustomerComponent,
    EditProjectComponent,
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
    OverviewService,
    AddUserService, AddProjectsService, AddCustomersService,
    EditUserService, EditProjectService, EditCustomerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
