import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']

})
export class ProfileComponent  { 
  id: number = 1;
  name: string = 'Sopyan Mulyana';
  email: string = 'sopyan.mulyana@mitrais.com';
 }