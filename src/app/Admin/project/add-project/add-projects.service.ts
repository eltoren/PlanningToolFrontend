import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Projects} from '../../../models/projects.model';
import {UserList} from '../../../models/UserList.model'
import {CustomersList} from '../../../models/CustomersList.model'
import {Url} from 'url';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable()
export class AddProjectsService {

 private projecttUrl = 'http://localhost:8080/addProjects';
  private usersUrl = 'http://localhost:8080/Users';
  private customersUrl = 'http://localhost:8080/Customers';

  constructor(private http: HttpClient) {}
  
  public addProject(project) {
    console.log(project)
    return this.http.post<Projects>(this.projecttUrl, project);
  }
  
  public getUsers(userList) {
    return this.http.post<UserList>(this.usersUrl, userList);
  }
  
   public getCustomers(customersList) {
    return this.http.post<CustomersList>(this.customersUrl, customersList);
  }

}
