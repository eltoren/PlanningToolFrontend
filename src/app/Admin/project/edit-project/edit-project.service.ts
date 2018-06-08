import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Projects} from "../../../models/projects.model";
import {UserList} from '../../../models/UserList.model';
import {ProjectsList} from '../../../models/ProjectsList.model';
import {CustomersList} from '../../../models/CustomersList.model';
import {Url} from 'url';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable()
export class EditProjectService {

  private projecttUrl = 'http://localhost:8080/addProjects';
  private usersUrl = 'http://localhost:8080/UsersList';
  private projectsUrl = 'http://localhost:8080/ProjectsList';
  private customersUrl = 'http://localhost:8080/CustomersList';

  constructor(private http: HttpClient) {}

  public saveProject(project) {
    return this.http.post<Projects>(this.projecttUrl, project);
  }

  public getUsers(userList) {
    return this.http.post<UserList>(this.usersUrl, userList);
  }

  public getProjects(projectList) {
    return this.http.post<ProjectsList>(this.projectsUrl, projectList);
  }

  public getCustomers(customersList) {
    return this.http.post<CustomersList>(this.customersUrl, customersList);
  }

}
