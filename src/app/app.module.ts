import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  

import { AppComponent }  from './app.component';
import { ProfileComponent }  from './profile.component';
import { ProfileFormComponent } from './profile-form.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,
                 ProfileFormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }