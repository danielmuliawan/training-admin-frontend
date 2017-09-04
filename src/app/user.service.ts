import { Injectable } from '@angular/core';
import { Person } from './person';

@Injectable()
export class UserService{

    getUsers() {
        return this.persons;
    }

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
    
}