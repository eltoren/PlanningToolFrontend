import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Projects} from '../models/projects.model'
import {ProjectsList} from '../models/ProjectsList.model'
import {Url} from 'url';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class OverviewService {

  private projectsListUrl = 'http://localhost:8080/ProjectsList';
  private projectsListFromUserUrl = 'http://localhost:8080/Overview';
  private projectsUrl = 'http://localhost:8080/addProjects';

  constructor(private http: HttpClient) {}

  public getProjects(projectList) {
    return this.http.post<ProjectsList>(this.projectsListUrl, projectList);
  }

   public addProjects(project) {

    return this.http.post<Projects>(this.projectsListUrl, project);
  }
  
  public getProjectsFromUser(user) {
    return this.http.post<ProjectsList>(this.projectsListFromUserUrl, user);
  }
}
