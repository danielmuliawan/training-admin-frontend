import { Component } from '@angular/core';
import { Person } from './person';
import { UserService } from './user.service';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./app.component.css']

})
export class UserListComponent  { 
    person:any[];

    constructor (private UserService: UserService){
      this.person = UserService.getUsers();
    }

    selectedPerson: Person;
    onSelected(sp: Person) {
      this.selectedPerson = sp;
    }
    
 }