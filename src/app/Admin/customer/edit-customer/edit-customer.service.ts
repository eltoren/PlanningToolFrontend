import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Customers} from '../../../models/customers.model';
import {ProjectsList} from '../../../models/ProjectsList.model';
import {CustomersList} from '../../../models/CustomersList.model';
import {Url} from 'url';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class EditCustomerService {

  private customerUrl = 'http://localhost:8080/addCustomer';
  private projectsUrl = 'http://localhost:8080/ProjectsList';
  private customersUrl = 'http://localhost:8080/CustomersList';

  constructor(private http: HttpClient) {}

  public editCustomer(customer) {
    return this.http.post<Customers>(this.customerUrl, customer);
  }

  public getProjects(projectList) {
    return this.http.post<ProjectsList>(this.projectsUrl, projectList);
  }
  
  public getCustomers(customersList) {
    return this.http.post<CustomersList>(this.customersUrl, customersList);
  }

}
