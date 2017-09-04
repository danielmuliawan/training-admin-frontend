import { Component } from '@angular/core';

@Component({
  selector: 'my-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./app.component.css']

})
export class ProfileComponent  { 
  id: number = 1;
  name: string = 'Sopyan Mulyana';
  email: string = 'sopyan.mulyana@mitrais.com';
 }