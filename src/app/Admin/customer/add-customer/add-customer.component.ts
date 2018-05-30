import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {Customers} from '../../../models/customers.model';
import {ProjectsList} from '../../../models/ProjectsList.model';
import {AddCustomersService} from './add-customers.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css',
    '../../main.css',
    '../../reset.css',
    '../../form.css']
})
export class AddCustomerComponent implements OnInit {

  addCustomersFrom: FormGroup;

  customer: Customers = new Customers();

  errorCustomersName: string;

  projectList: ProjectsList = new ProjectsList;

  constructor(private router: Router, private addCustomersService: AddCustomersService) {}

  ngOnInit() {
    this.addCustomersFrom = new FormGroup({
      'customerName': new FormControl(this.customer.customerName, Validators.required),
      'projectsOfCustomer': new FormControl(this.customer.projectsOfCustomer),
    });

    this.addCustomersService.getProjects(this.projectList).subscribe(data => {
      data.allProjects.forEach((projects) => {
        this.projectList.allProjects.push(projects);
      })
    });
  }

  addCustomer(): void {
    this.addCustomersService.addCustomer(this.customer).subscribe(data => {alert('customer created')});
  }

  get customerName() {return this.addCustomersFrom.get('customerName');}
  get projectsOfCustomer() {return this.addCustomersFrom.get('projectsOfCustomer');}

}
