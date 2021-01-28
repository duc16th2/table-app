import { Component } from '@angular/core';
import GetDataService from './get-data.service';
import userData from './users';
interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  birthday: string;
  salary: number;
  phone: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Tableapp';
  showDropdown: boolean = false;
  users: User[] = userData;
  sortedUser: User[] = [...this.users];
  //arr: any[] = [];
  sortBy = [
    {
      name: 'Select field to sort',
      value: '',
    },
    {
      name: 'Id',
      value: 'id',
    },
    {
      name: 'First Name',
      value: 'firstName',
    },
    {
      name: 'Last Name',
      value: 'lastName',
    },
    {
      name: 'Email',
      value: 'emai',
    },
    {
      name: 'Brithday',
      value: 'birthday',
    },
    {
      name: 'Salary',
      value: 'salary',
    },
    {
      name: 'Phone',
      value: 'phone',
    },
  ];
  orderBy = this.sortBy[0];
  // constructor(private users: GetDataService) {}
  // ngOnInit(){
  //   this.items=this.users.getDataUser();
  // }
  toggleShow() {
    this.showDropdown = !this.showDropdown;
  }
  handleSort(item): void {
    this.orderBy = item;
    this.sortedUser.sort((a, b) => {
      if (this.orderBy.value === '') {
        this.sortedUser = this.users;
        return;
      }
      let x = a[this.orderBy.value].toLowerCase();
      let y = b[this.orderBy.value].toLowerCase();
      if (x < y) {
        return -1;
      }
      if (x > y) {
        return 1;
      }
      return 0;
    });
  }
}
