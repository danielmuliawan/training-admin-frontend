import { Component, Input } from '@angular/core';
import { Person } from './person';


@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html'
})
export class UserDetailComponent  { 
  @Input() person:Person;
}