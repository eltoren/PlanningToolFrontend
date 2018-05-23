import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {Users} from '../../models/users.model';
import {LoginService} from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css',
    '../../main.css',
    '../../reset.css',
    '../../form.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  user: Users = new Users();
  errorUsername: string;
  errorPassword: string;

  constructor(private router: Router, private loginService: LoginService) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'username': new FormControl(this.user.username, Validators.required),
      'password': new FormControl(this.user.password, Validators.required)
    });
  }

  loginUser(): void {
    this.loginService.login(this.user)
      .subscribe(data => {
        if (data.password == null) {
          this.errorUsername = data.username;
          this.router.navigateByUrl('login');
        } else if (data.username == null) {
          this.errorPassword = data.password;
          this.router.navigateByUrl('login');
        } else {
          this.router.navigateByUrl('overview');
        }
      });

  }

  get username() {return this.loginForm.get('username'); }
  get password() {return this.loginForm.get('password'); }

}
