import { NgModule }             from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { DashboardComponent }  from './dashboard.component';
import { UserListComponent }  from './user-list.component';
import { UserDetailComponent } from './user-detail.component'

const appRoutes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
    },
    {
        path: 'users',
        component: UserListComponent,
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'user/:ID',
        component: UserDetailComponent
    }
];
  
@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ]
})
export class AppRouting {}