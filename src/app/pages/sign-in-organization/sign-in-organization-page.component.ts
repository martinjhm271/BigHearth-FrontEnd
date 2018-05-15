import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';


@Component({
  selector: 'app-sign-in-organization',
  templateUrl: './sign-in-organization-page.component.html'
})

export class SignInOrganizationPageComponent implements OnInit {
  public loginError: string;
  public signInForm: FormGroup;


    constructor(public formBuilder:FormBuilder,public loginService: LoginService,public router: Router) {

     }


     ngOnInit() {
      this.signInForm = this.formBuilder.group({
        email: '',
        password: ''
      });
    }

      doLogin() {
        this.loginService.login(
          this.signInForm.get('email').value,
          this.signInForm.get('password').value).subscribe(loginResponse => {
            sessionStorage.setItem("currentUser",this.signInForm.get('email').value);
            this.router.navigate(['home']);
          }, error => {
            this.loginError = 'Error Signing in: ' + (error && error.message ? error.message : '');
          })
      }


}