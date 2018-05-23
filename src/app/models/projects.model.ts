import {Users} from './users.model';
import {Customers} from './customers.model';

export class Projects {

  id: number;
  projectName: string;
  projectOwner: Customers;
  usersOnProject: Array<Users>;
  startDate: Date;
  endDate: Date;

}
