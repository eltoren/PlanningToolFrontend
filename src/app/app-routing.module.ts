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
    path: 'adminOverview/adminAddUser',
    component: AddUserComponent
  },
  {
    path: 'adminOverview/adminAddProject',
    component: AddProjectComponent
  },
  {
    path: 'adminOverview/adminAddCustomer',
    component: AddCustomerComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModules {}
