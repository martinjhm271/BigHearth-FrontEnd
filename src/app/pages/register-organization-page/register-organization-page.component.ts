import{Component, OnInit}from '@angular/core';
import {Router}from '@angular/router';
import {FormGroup, FormBuilder} from '@angular/forms';

import {OrganizationService}from '../../services/organization.service';

@Component({
  selector: 'app-register-organization-page',
  templateUrl: './register-organization-page.component.html',
  styleUrls: ['./register-organization-page.component.css']
})
export class RegisterOrganizationPageComponent implements OnInit {
  private todoForm: FormGroup;

  constructor(
    public organizationService: OrganizationService,
    public formBuilder: FormBuilder,
    public router: Router,
  ) {

  }

  ngOnInit() {
    this.todoForm = this.formBuilder.group({
      password: '',
      mail: '',
      state: '',
      city: '',
      address: '',
      commercialName: '',
      businessName: ' ',
      NIT: 0,
    });
  }

  onSubmit() {
    this.organizationService.createOrganization(
      this.todoForm.get('commercialName').value,
      this.todoForm.get('businessName').value,
      this.todoForm.get('state').value,
      this.todoForm.get('city').value,
      this.todoForm.get('address').value,
      "",
      this.todoForm.get('mail').value,
      "",
      this.todoForm.get('password').value,
      this.todoForm.get('NIT').value
    ).subscribe(serverResponse=>{
        this.router.navigate(['/']);
         }, error=>{
           console.log(error);
         });

   this.router.navigate(['/']);
  }

}
