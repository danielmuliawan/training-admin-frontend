import { Component } from '@angular/core';
import { Person } from './person';


@Component({
  selector: 'profile-form',
  templateUrl: './profile-form.component.html'
})
export class ProfileFormComponent  { 
  person = new Person(1, 'Sopyan Daniel', 'sopyan@mail.com');

}