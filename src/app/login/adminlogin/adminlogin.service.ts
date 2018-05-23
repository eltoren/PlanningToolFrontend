import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Users} from '../../models/users.model';
import {Url} from 'url';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class AdminloginService {

  private userUrl = 'http://localhost:8080/AdminLogin'; // url for spring back-end

  constructor(private http: HttpClient) {}

  public loginAdmin(user) {
    return this.http.post<Users>(this.userUrl, user);
  }

}
