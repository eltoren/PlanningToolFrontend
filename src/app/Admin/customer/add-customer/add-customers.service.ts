import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Customers} from '../../../models/customers.model';
import {ProjectsList} from '../../../models/ProjectsList.model';
import {Url} from 'url';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable()
export class AddCustomersService {

  private customerUrl = 'http://localhost:8080/addCustomer';
  private projectsUrl = 'http://localhost:8080/ProjectsList';

  constructor(private http: HttpClient) {}

  public addCustomer(customer) {
    console.log(customer);
    return this.http.post<Customers>(this.customerUrl, customer);
  }

  public getProjects(projectList) {
    return this.http.post<ProjectsList>(this.projectsUrl, projectList);
  }


}
