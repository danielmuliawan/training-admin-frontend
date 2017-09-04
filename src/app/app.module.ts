import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { UserListComponent }  from './user-list.component';
import { UserDetailComponent } from './user-detail.component';
import { UserService } from './user.service';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,
                 UserListComponent, UserDetailComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ UserService ]
})
export class AppModule { }