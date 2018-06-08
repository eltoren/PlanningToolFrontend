import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {Customers} from '../../../models/customers.model';
import {ProjectsList} from '../../../models/ProjectsList.model';
import {CustomersList} from '../../../models/CustomersList.model';
import {EditCustomerService} from './edit-customer.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css',
    '../../../main.css',
    '../../../reset.css',
    '../../../form.css']
})
export class EditCustomerComponent implements OnInit {

  editCustomerFrom: FormGroup;
  selectCustomerForm: FormGroup;

  customer: Customers = new Customers;

  projectList: ProjectsList = new ProjectsList;
  customersList: CustomersList = new CustomersList;

  constructor(private router: Router, private editCustomerService: EditCustomerService) {}

  ngOnInit() {
    this.editCustomerService.getProjects(this.projectList).subscribe(data => {
      data.allProjects.forEach((projects) => {
        this.projectList.allProjects.push(projects);
      })
    });

    this.editCustomerService.getCustomers(this.customersList).subscribe(data => {
      data.allCustomers.forEach(customer => {
        console.log(customer)
        this.customersList.allCustomers.push(customer);
      })
    });

    this.editCustomerFrom = new FormGroup({
      'customerName': new FormControl(this.customer.customerName, Validators.required),
      'projectsOfCustomer': new FormControl(this.customer.projectsOfCustomer),
    });

    this.selectCustomerForm = new FormGroup({
      'customer': new FormControl(this.customer),
    });

  }

  saveEditedCustomer(): void {
    this.editCustomerService.editCustomer(this.customer).subscribe(data => {alert('customer edited')})
  }


  get customerName() {return this.editCustomerFrom.get('customerName');}
  get projectsOfCustomer() {return this.editCustomerFrom.get('projectsOfCustomer');}
}
