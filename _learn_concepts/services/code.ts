/*
   A reusable logic container that helps keep your application modular, 
   testable, and maintainable.
*/



// simple service 

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  getUsers() {
    return [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' }
    ];
  }
}

// component
import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-users',
  template: `
    <ul>
      <li *ngFor="let user of users">
        {{ user.name }}
      </li>
    </ul>
  `
})
export class UsersComponent {

  users: any[] = [];

  constructor(private userService: UserService) {
    this.users = this.userService.getUsers();
  }
}


// with observables
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>('/api/users');
  }
}


//TS
users$ = this.userService.getUsers();


// HTML
<li *ngFor="let user of users$ | async">
  {{ user.name }}
</li>

// with Rxjs operators
users$ = this.userService.getUsers().pipe(
  map(users => users.filter(user => user.active))
);

// chaining mutliple API calls
userDetails$ = this.userService.getUsers().pipe(
  switchMap(users => forkJoin(
    users.map(user => this.http.get(`/api/users/${user.id}/details`))
  ))
);