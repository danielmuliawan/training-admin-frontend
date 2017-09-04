import { Component, OnInit } from '@angular/core';
import { Person } from './../person/person';
import { UserService } from './../user/user.service';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']

})
export class UserListComponent implements OnInit { 
    person = [];

    constructor (private UserService: UserService){ }

    ngOnInit(): void {
      this.UserService.getUsers()
        .then(person => this.person = person);
    }

    selectedPerson: Person;
    onSelected(sp: Person) {
      this.selectedPerson = sp;
    }

 }