import{Component, OnInit}from '@angular/core';
import {Router}from '@angular/router';
import {FormGroup, FormBuilder} from '@angular/forms';

import {UserService}from '../../services/user.service';

@Component({
  selector: 'app-user.edit-page',
  templateUrl: './user-edit-page.component.html',
  styleUrls: ['./user-edit-page.component.css']
})
export class UserEditPageComponent implements OnInit {
  private userForm: FormGroup;
  private userError:String = '';
  constructor(
    public userService: UserService,
    public formBuilder: FormBuilder,
    public router: Router,
  ) {

  }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      username: '',
      firstname: '',
      lastname: '',
      email:'',
      image: '',
      password: ''
    });
  }

  onSubmit() {
    this.userService.create(
      this.userForm.get('firstname').value,
      this.userForm.get('lastname').value,
      this.userForm.get('image').value,
      this.userForm.get('username').value,
      this.userForm.get('email').value,
      this.userForm.get('password').value
    ).subscribe(response => {
      this.router.navigate(['/users']);
    },error => {
      this.userError = 'Error al agregar usuario: '+ (error && error.message ? error.message : '');
    });

    
  }

}
