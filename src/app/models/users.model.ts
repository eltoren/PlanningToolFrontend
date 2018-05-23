import {Projects} from './projects.model';

export class Users {

  id: number;
  username: string;
  password: string;
  admin: boolean;
  firstName: string;
  lastName: string;
  functions: string;
  projects: Array<Projects>;

}
