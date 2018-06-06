import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {Customers} from '../../../models/customers.model';
import {ProjectsList} from '../../../models/ProjectsList.model';
import {Projects} from "../../../models/projects.model";
import {AddCustomersService} from './add-customers.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css',
    '../../../main.css',
    '../../../reset.css',
    '../../../form.css']
})
export class AddCustomerComponent implements OnInit {

  addCustomersFrom: FormGroup;

  customer: Customers = new Customers();

  errorCustomersName: string;

  allProjectList: ProjectsList = new ProjectsList;


  constructor(private router: Router, private addCustomersService: AddCustomersService) {}

  ngOnInit() {
    this.addCustomersFrom = new FormGroup({
      'customerName': new FormControl(this.customer.customerName, Validators.required),
      'projectsOfCustomer': new FormControl(this.customer.projectsOfCustomer),
    });

    this.addCustomersService.getProjects(this.allProjectList).subscribe(data => {
      data.allProjects.forEach((projects) => {
        if (projects.ownerOfProject == null) {
          
           this.allProjectList.allProjects.push(projects);
        }
       
      });
    });
  }



  addCustomer(): void {
    console.log(this.customer);
    this.customer.projectsOfCustomer.forEach((project) => {project.ownerOfProject = this.customer})
    this.addCustomersService.addCustomer(this.customer).subscribe(data => {console.log(data); alert('customer created')});
  }

  get customerName() {return this.addCustomersFrom.get('customerName');}
  get projectsOfCustomer() {return this.addCustomersFrom.get('projectsOfCustomer');}

}
