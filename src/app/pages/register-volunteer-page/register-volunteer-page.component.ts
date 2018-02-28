import{Component, OnInit}from '@angular/core';
import {Router}from '@angular/router';
import {FormGroup, FormBuilder} from '@angular/forms';

import {UsersService}from '../../services/users.service';

@Component({
  selector: 'app-register-volunteer-page',
  templateUrl: './register-volunteer-page.component.html',
  styleUrls: ['./register-volunteer-page.component.css']
})
export class RegisterVolunteerPageComponent implements OnInit {
  private todoForm: FormGroup;

  constructor(
    public usersService: UsersService,
    public formBuilder: FormBuilder,
    public router: Router,
  ) {

  }

  ngOnInit() {
    this.todoForm = this.formBuilder.group({
      username: '',
      password: '',
      mail: '',
      state: '',
      city: '',
      address: '',
      name: '',
      lastname: '',
      gender: '',
      bornDate: '',
    });
  }

  onSubmit() {
    this.usersService.createVolunteer(
      this.todoForm.get('username').value,
      this.todoForm.get('password').value,
      this.todoForm.get('mail').value,
      this.todoForm.get('state').value,
      this.todoForm.get('city').value,
      this.todoForm.get('address').value,
      this.todoForm.get('name').value,
      this.todoForm.get('lastname').value,
      this.todoForm.get('gender').value,
      this.todoForm.get('bornDate').value
    ).subscribe(serverResponse=>{
        this.router.navigate(['/']);
         }, error=>{
           console.log(error);
         });

   this.router.navigate(['/']);
  }

}
