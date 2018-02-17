import{Component, OnInit}from '@angular/core';

import {UserService}from '../../services/user.service';
import {Todo}from '../../models/todo';
import {User} from '../../models/user';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-user-list-page',
  templateUrl: './user-list-page.component.html',
  styleUrls: ['./user-list-page.component.css']
})
export class UserListPageComponent implements OnInit {
  private users: User[];

  constructor(public userService: UserService) {

  }

  ngOnInit() {
    this.userService.list().subscribe(
      listUser => {
        this.users = listUser;
      } 
    );
  }

}