import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Projects} from '../models/projects.model'
import {ProjectsList} from '../models/ProjectsList.model'
import {Url} from 'url';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class ProjectsService {

  private userUrl = 'http://localhost:8080/Projects';

  constructor(private http: HttpClient) {}

  public getProjects(projectList) {
    return this.http.post<ProjectsList>(this.userUrl, projectList);
  }

  public addProject(project) {
    this.http.post<Projects>(this.userUrl, project);
  }
}