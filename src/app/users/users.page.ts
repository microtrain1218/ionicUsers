import { Component, OnInit } from '@angular/core';

import { UsersService } from '../users.service';
import { User } from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
