import { Injectable } from '@angular/core';
import { Person } from './person';
import { persons } from './mock-persons';

@Injectable()
export class UserService{

    getUsers(): Promise<any[]> {
        return Promise.resolve(persons);
    }

    getUserDetail(ID: number): Promise<any> {
        return this.getUsers()
          .then(persons => persons.find(person => person.ID === ID));
    }

}