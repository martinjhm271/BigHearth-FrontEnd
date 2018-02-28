import{Component, OnInit}from '@angular/core';
import {Router}from '@angular/router';
import {FormGroup, FormBuilder} from '@angular/forms';

import {UsersService}from '../../services/users.service';

@Component({
  selector: 'app-select-rol-page',
  templateUrl: './select-rol-page.component.html',
  styleUrls: ['./select-rol-page.component.css']
})
export class SelectRolPageComponent implements OnInit {
  private todoForm: FormGroup;

  constructor(
    public usersService: UsersService,
    public formBuilder: FormBuilder,
    public router: Router,
  ) {

  }

  ngOnInit() {

    }





}
