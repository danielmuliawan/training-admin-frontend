import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Person } from '../person/person';

@Injectable()
export class UserService{

    private headers = new Headers({'Content-Type': 'application/json'});
    private usersUrl = 'api/persons'; // URL to web api

    constructor(private http: Http) { }

    getUser(id: number): Promise<Person> {
        const url = `${this.usersUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Person)
            .catch(this.handleError);
    }

    getUsers(): Promise<Person> {
        return this.http.get(this.usersUrl)
            .toPromise()
            .then(response => response.json().data as Person)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    update(person): Promise<Person> {
        const url = `${this.usersUrl}/${person.id}`;
        return this.http
          .put(url, JSON.stringify(person), {headers: this.headers})
          .toPromise()
          .then(() => person)
          .catch(this.handleError);
      }

}