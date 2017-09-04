import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { UserListComponent }  from './user-list.component';
import { UserDetailComponent } from './user-detail.component';

const appRoutes: Routes = [
  { path: 'detail/:id', component: UserDetailComponent },
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent,
                 UserListComponent, UserDetailComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }