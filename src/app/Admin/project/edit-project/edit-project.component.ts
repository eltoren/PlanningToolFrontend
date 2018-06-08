import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {Projects} from "../../../models/projects.model";
import {UserList} from '../../../models/UserList.model';
import {ProjectsList} from '../../../models/ProjectsList.model';
import {CustomersList} from '../../../models/CustomersList.model';
import {EditProjectService} from './edit-project.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css',
    '../../../main.css',
    '../../../reset.css',
    '../../../form.css']
})
export class EditProjectComponent implements OnInit {
  
  editProjectForm: FormGroup;
  selectProjectForm: FormGroup;
  
  project: Projects = new Projects();
  
  allUsersList: UserList = new UserList();
  projectList: ProjectsList = new ProjectsList;
  customersList: CustomersList = new CustomersList;

  constructor(private router: Router, private editProjecService: EditProjectService) {}

  ngOnInit() {
    this.editProjecService.getProjects(this.projectList).subscribe(data => {
      data.allProjects.forEach((projects) => {
        this.projectList.allProjects.push(projects);
      })
    });
    
    this.editProjecService.getUsers(this.allUsersList).subscribe(data => {
      data.allUsers.forEach(user => {
        this.allUsersList.allUsers.push(user);
      })
    });
    
    

     this.editProjecService.getCustomers(this.customersList).subscribe(data => {
      data.allCustomers.forEach(customer => {
        this.customersList.allCustomers.push(customer);
      })
    });
    
     this.editProjectForm = new FormGroup({
      'projectName': new FormControl(this.project.projectName, Validators.required),
      'ownerOfProject': new FormControl(this.project.ownerOfProject),
      'usersOnProject': new FormControl(this.project.usersOnProject),
      'startDate': new FormControl(this.project.startDate, Validators.required),
      'endDate': new FormControl(this.project.endDate),
    });
    
    this.selectProjectForm = new FormGroup({
      'projects': new FormControl(this.project),
    });
    
  }
  
  saveEditedProject(): void {
    this.editProjecService.saveProject(this.project).subscribe(data => {alert('project edited')})
  }
  
  get projectName() {return this.editProjectForm.get('projectName');}
  get ownerOfProject() {return this.editProjectForm.get('ownerOfProject');}
  get usersOnProject() {return this.editProjectForm.get('usersOnProject');}
  get startDate() {return this.editProjectForm.get('startDate');}
  get endDate() {return this.editProjectForm.get('endDate');}


}
