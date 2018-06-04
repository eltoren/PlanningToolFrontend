import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {Users} from '../../../models/users.model';
import {ProjectsList} from '../../../models/ProjectsList.model'
import {AddUserService} from './add-user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css',
    '../../../main.css',
    '../../../reset.css',
    '../../../form.css']
})
export class AddUserComponent implements OnInit {

  addUserForm: FormGroup;

  user: Users = new Users();
  errorUsername: string;

  projectList: ProjectsList = new ProjectsList;

  constructor(private router: Router, private addUserService: AddUserService) {}

  ngOnInit() {
    this.addUserForm = new FormGroup({
      'firstName': new FormControl(this.user.firstName, Validators.required),
      'lastName': new FormControl(this.user.lastName, Validators.required),
      'username': new FormControl(this.user.username, Validators.required),
      'password': new FormControl(this.user.password, Validators.required),
      'admin': new FormControl(this.user.admin),
      'functions': new FormControl(this.user.functions),
      'projects': new FormControl(this.user.projectsOfUser),
    });

    this.addUserService.getProjects(this.projectList).subscribe(data => {
      data.allProjects.forEach((projects) => {
        this.projectList.allProjects.push(projects);
      })
    });
  }

  addUser(): void {
    this.addUserService.addUser(this.user).subscribe(data => {alert('user created')});
  }


  get firstName() {return this.addUserForm.get('firstName');}
  get lastName() {return this.addUserForm.get('lastName');}
  get username() {return this.addUserForm.get('username');}
  get password() {return this.addUserForm.get('password');}
  get admin() {return this.addUserForm.get('admin');}
  get functions() {return this.addUserForm.get('functions');}
  get projects() {return this.addUserForm.get('projects')}

}
