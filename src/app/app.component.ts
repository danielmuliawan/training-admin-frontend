import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  tiles = [
    {text: 'One', cols: 6, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 5, color: 'lightgreen'},
    {text: 'Three', cols: 5, rows: 5, color: 'lightpink'},
    {text: 'Four', cols: 6, rows: 1, color: '#DDBDF1'},
  ];

}