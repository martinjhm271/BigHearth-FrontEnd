import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in-page.component.html'
})

export class SignInPageComponent implements OnInit {
  public loginError: string;
  public signInForm: FormGroup;




    
    constructor(public formBuilder:FormBuilder,public usersService: UsersService,public router: Router) {

     }

     ngOnInit() { 
      this.signInForm = this.formBuilder.group({
        username: '',
        password: ''
      });
    }

      doLogin() {
        this.usersService.login(
          this.signInForm.get('username').value,
          this.signInForm.get('password').value).subscribe(loginResponse => {
            this.router.navigate(['home']);
          }, error => {
            this.loginError = 'Error Signing in: ' + (error && error.message ? error.message : '');
          })
      }


}