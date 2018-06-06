import {Users} from './users.model';
import {Customers} from './customers.model';

export class Projects {

  id: number;
  projectName: string;
  ownerOfProject: Customers;
  usersOnProject: Array<Users> = new Array;
  startDate: Date;
  endDate: Date;
  setProjectName(name: string) {
    this.projectName = name;
  }

}

