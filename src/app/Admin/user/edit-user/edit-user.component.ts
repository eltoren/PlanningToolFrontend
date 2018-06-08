import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {Users} from '../../../models/users.model';
import {ProjectsList} from '../../../models/ProjectsList.model';
import {UserList} from '../../../models/UserList.model';
import {EditUserService} from './edit-user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css',
    '../../../main.css',
    '../../../reset.css',
    '../../../form.css']
})
export class EditUserComponent implements OnInit {

  editUserForm: FormGroup;
  selectUserForm: FormGroup;

  user: Users = new Users();
  
  projectList: ProjectsList = new ProjectsList;
  userList: UserList = new UserList;

  constructor(private router: Router, private editUserService: EditUserService) {}

  ngOnInit() {
    this.editUserService.getProjects(this.projectList).subscribe(data => {
      data.allProjects.forEach((projects) => {
        this.projectList.allProjects.push(projects);
      })
    });

    this.editUserService.getUserList(this.userList).subscribe(data => {
      data.allUsers.forEach((user) => {
        console.log(user)
        this.userList.allUsers.push(user);
      })
    });

    this.editUserForm = new FormGroup({
      'firstName': new FormControl(this.user.firstName, Validators.required),
      'lastName': new FormControl(this.user.lastName, Validators.required),
      'username': new FormControl(this.user.username, Validators.required),
      'password': new FormControl(this.user.password, Validators.required),
      'admin': new FormControl(this.user.admin),
      'functions': new FormControl(this.user.functions),
      'projects': new FormControl(this.user.projectsOfUser),
    });

    this.selectUserForm = new FormGroup({
      'user': new FormControl(this.user),

    });


  }

  saveEditUser(): void {
    this.editUserService.saveUser(this.user).subscribe(data => {alert('user edited')});
  }

  get selecedUser() {return this.selectUserForm.get('user');}

  get firstName() {return this.editUserForm.get('firstName');}
  get lastName() {return this.editUserForm.get('lastName');}
  get username() {return this.editUserForm.get('username');}
  get password() {return this.editUserForm.get('password');}
  get admin() {return this.editUserForm.get('admin');}
  get functions() {return this.editUserForm.get('functions');}
  get projectsOfUser() {return this.editUserForm.get('projectsOfUser')}



}
