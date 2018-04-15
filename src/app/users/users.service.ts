import { Injectable } from '@angular/core';
import { User } from './user.interface';

@Injectable()
export class UsersService {

  get users(): User[] {
    return this._users;
  }

  set users(value: User[]) {
    this._users = value;
  }

  constructor() { }

  private _users: User[] = [
    {username: 'user1', email: 'user1@email.com', password: '12345', group: 'user'},
    {username: 'user2', email: 'user2@email.com', password: '12345', group: 'user'},
    {username: 'user', email: 'user@email.com', password: '12345', group: 'admin'},
  ];

}
