import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { UserService } from './../user/user.service';
import { Person } from './../person/person';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html'
})
export class UserDetailComponent implements OnInit  { 
  person:Person;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.userService.getUser(+params.get('id')))
      .subscribe(person => this.person = person);
  }

  save(): void {
    this.userService.update(this.person )
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}