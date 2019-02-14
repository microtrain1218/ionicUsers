import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UsersService } from '../users.service';
import { User } from '../user'; 

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage {

  user: User;
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private usersService: UsersService  
  ) { }

  ionViewWillEnter() {
    this.activatedRoute.params.subscribe(params=>{
      this.getUser(params['id']);
    });
  }

  getUser(id:string):void {
    this.usersService.user(id).subscribe(
      (response:any)=>{
        this.user = response.user;
      }
    );
  }

}
