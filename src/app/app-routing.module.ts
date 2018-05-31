import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import {AppComponent} from './app.component';
import {IndexComponent} from './index/index.component';
import {LoginComponent} from './login/login/login.component';
import {OverviewComponent} from './overview/overview.component';
import {AdminloginComponent} from './login/adminlogin/adminlogin.component';
import {AdminOverviewComponent} from './Admin/admin-overview/admin-overview.component';
import {AddUserComponent} from './Admin/user/add-user/add-user.component';
import {AddProjectComponent} from './Admin/project/add-project/add-project.component';
import {AddCustomerComponent} from './Admin/customer/add-customer/add-customer.component';
import {UserOverviewComponent} from './Admin/user/user-overview/user-overview.component'
import {ProjectOverviewComponent} from './Admin/project/project-overview/project-overview.component';
import {CustomersOverviewComponent} from './Admin/customer/customers-overview/customers-overview.component';
import {EditUserComponent} from './Admin/user/edit-user/edit-user.component';


const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'overview',
    component: OverviewComponent
  },
  {
    path: 'adminlogin',
    component: AdminloginComponent
  },
  {
    path: 'adminOverview',
    component: AdminOverviewComponent
  },
  {
    path: 'adminOverview/adminUserOverview',
    component: UserOverviewComponent
  },
  {
    path: 'adminOverview/adminUserOverview/adminAddUser',
    component: AddUserComponent
  },
  {
    path: 'adminOverview/adminUserOverview/adminEditUser',
    component: EditUserComponent
  },
  {
    path: 'adminOverview/adminProjectOverview',
    component: ProjectOverviewComponent
  },
  {
    path: 'adminOverview/adminProjectOverview/adminAddProject',
    component: AddProjectComponent
  },
  {
    path: 'adminOverview/adminCustomerOverview',
    component: CustomersOverviewComponent
  },
  {
    path: 'adminOverview/adminCustomerOverview/adminAddProject',
    component: AddCustomerComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModules {}
