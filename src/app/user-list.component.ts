import { Component } from '@angular/core';
import { Person } from './person';

@Component({
  selector: 'user-list', //tag to use in index html
  templateUrl: './user-list.component.html', // here is template, its can be template url for you to create seperate html file
  styleUrls: ['./app.component.css']

})
export class UserListComponent  { 
  persons: any[] = [
    {
      ID: 1,
      Name: 'Sopyan Mulyana',
      Email: 'sopyan.mulyana@mitrais.com'
    },
    {
      ID: 2,
      Name: 'Daniel Muliawan',
      Email: 'daniel.muliawan@mitrais.com'
    },
    {
      ID: 3,
      Name: 'Mark Shinoda',
      Email: 'mark.shinoda@mitrais.com'
    }
  ]
  selectedPerson: Person;
  onSelected(person: Person):void{
    this.selectedPerson=person;
  }
 }