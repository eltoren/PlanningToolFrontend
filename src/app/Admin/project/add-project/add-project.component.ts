import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {Projects} from '../../../models/projects.model';
import {Users} from '../../../models/users.model';
import {UserList} from '../../../models/UserList.model';
import {CustomersList} from '../../../models/CustomersList.model'
import {AddProjectsService} from './add-projects.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css',
    '../../../main.css',
    '../../../reset.css',
    '../../../form.css']
})
export class AddProjectComponent implements OnInit {

  addProjectsForm: FormGroup;

  project: Projects = new Projects();
  user: Users = new Users();

  errorProjectName: string;

  allUsersList: UserList = new UserList();
  usersList: UserList = new UserList();
  customersList: CustomersList = new CustomersList();

  constructor(private router: Router, private addProjectsService: AddProjectsService) {}

  ngOnInit() {
    this.addProjectsForm = new FormGroup({
      'projectName': new FormControl(this.project.projectName, Validators.required),
      'projectOwner': new FormControl(this.project.ownerOfProject),
      'userList': new FormControl(this.usersList.allUsers),
      'startDate': new FormControl(this.project.startDate, Validators.required),
      'endDate': new FormControl(this.project.endDate),
    });

    this.addProjectsService.getUsers(this.allUsersList).subscribe(data => {
      data.allUsers.forEach(user => {
        this.allUsersList.allUsers.push(user);
      })
    });

    this.addProjectsService.getCustomers(this.customersList).subscribe(data => {
      data.allCustomers.forEach(customer => {
        this.customersList.allCustomers.push(customer);
      })
    });
  }

  addPrjoject(): void {
    this.usersList.allUsers.forEach((user) => {
      this.project.usersOnProject.push(user)
    });
    this.addProjectsService.addProject(this.project).subscribe(data => {alert('project created')});
  }
  
  get projectName() {return this.addProjectsForm.get('projectName');}
  get ownerOfProject() {return this.addProjectsForm.get('ownerOfProject');}
  get allUsers() {return this.addProjectsForm.get('usersList');}
  get startDate() {return this.addProjectsForm.get('startDate');}
  get endDate() {return this.addProjectsForm.get('endDate');}

}
