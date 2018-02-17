import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in-page.component.html'
})

export class SignInPageComponent implements OnInit {
  private loginError: string;
  private signInForm: FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    private userService: UserService,
    public router: Router
  ) {

  }

  ngOnInit(): void {
    this.signInForm = this.formBuilder.group({
      username: '',
      password: ''
    });
  }

  doLogin() {
    this.userService.login(
      this.signInForm.get('username').value,
      this.signInForm.get('password').value).subscribe(loginResponse => {
        this.router.navigate(['tasks']);
      }, error => {
        this.loginError = 'Error Signing in: ' + (error && error.message ? error.message : '');
      });
  }
}
