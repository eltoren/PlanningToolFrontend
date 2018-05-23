import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {Users} from '../../models/users.model';
import {AdminloginService} from './adminlogin.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css',
    '../../main.css',
    '../../reset.css',
    '../../form.css']
})
export class AdminloginComponent implements OnInit {

  adminloginForm: FormGroup;

  user: Users = new Users();
  errorUsername: string;
  errorPassword: string;
  errorAdmin: string;

  constructor(private router: Router, private adminloginService: AdminloginService) {}

  ngOnInit() {
    this.adminloginForm = new FormGroup({
      'username': new FormControl(this.user.username, Validators.required),
      'password': new FormControl(this.user.password, Validators.required)
    });
  }

  loginAdmin(): void {
    this.adminloginService.loginAdmin(this.user)
      .subscribe(data => {
        if (data.password == null) {
          this.errorUsername = data.username;
          this.router.navigateByUrl('adminlogin');
        } else if (data.username == null) {
          this.errorPassword = data.password;
          this.router.navigateByUrl('adminlogin');
        } else if (data.admin === false) {
          this.errorAdmin = 'this user is not an admin!';
        } else {
          this.router.navigateByUrl('overview');
        }
      });

  }

  get username() {return this.adminloginForm.get('username'); }
  get password() {return this.adminloginForm.get('password'); }
}
