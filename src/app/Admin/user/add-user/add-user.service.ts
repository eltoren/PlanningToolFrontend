import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Users} from '../../../models/users.model';
import {ProjectsList} from '../../../models/ProjectsList.model'
import {Url} from 'url';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};



@Injectable()
export class AddUserService {

  private userUrl = 'http://localhost:8080/addUsers';
  private projectsUrl = 'http://localhost:8080/Projects';

  constructor(private http: HttpClient) {}

  public addUser(user) {
    return this.http.post<Users>(this.userUrl, user);
  }

  public getProjects(projectList) {
    return this.http.post<ProjectsList>(this.projectsUrl, projectList);
  }

}
