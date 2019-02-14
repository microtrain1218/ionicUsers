import { Component } from '@angular/core';

import { UsersService } from '../users.service';
import { User } from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage {

  users:User;

  constructor(private usersService: UsersService) { }

  ionViewWillEnter() {
    this.getUsers();
  }

  getUsers(): void{
    this.usersService.users().subscribe(
      (response:any)=>{
        console.log(response);
        this.users = response.users;
      }
    );
  }

}
