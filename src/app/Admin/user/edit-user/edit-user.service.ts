import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Users} from '../../../models/users.model';
import {ProjectsList} from '../../../models/ProjectsList.model';
import {UserList} from '../../../models/UserList.model';
import {Url} from 'url';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};



@Injectable()
export class EditUserService {


  private editUserUrl = 'http://localhost:8080/editUsers';
  private saveUserUrl = 'http://localhost:8080/addUsers';
  private userListUrl = 'http://localhost:8080/Users';
  private projectsUrl = 'http://localhost:8080/Projects';

  constructor(private http: HttpClient) {}

  public getUser(user) {
    return this.http.post<Users>(this.editUserUrl, user);
  }
  
  public saveUser(user) {
    return this.http.post<Users>(this.saveUserUrl, user);
  }
  
  public getUserList(userList) {
    return this.http.post<UserList>(this.userListUrl, userList);
  }

  public getProjects(projectList) {
    return this.http.post<ProjectsList>(this.projectsUrl, projectList);
  }


}
