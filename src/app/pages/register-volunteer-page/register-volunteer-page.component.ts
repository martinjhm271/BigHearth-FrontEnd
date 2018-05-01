import{Component, OnInit}from '@angular/core';
import {Router}from '@angular/router';
import {FormGroup, FormBuilder} from '@angular/forms';

import {VolunteerService}from '../../services/volunteer.service';

@Component({
  selector: 'app-register-volunteer-page',
  templateUrl: './register-volunteer-page.component.html',
  styleUrls: ['./register-volunteer-page.component.css']
})
export class RegisterVolunteerPageComponent implements OnInit {
  private todoForm: FormGroup;
  selectedFile = null;
  base64textString="";

  constructor(
    public volunteerService: VolunteerService,
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
    this.volunteerService.createVolunteer(
      this.todoForm.get('name').value,
        this.todoForm.get('lastname').value,
        this.todoForm.get('gender').value,
        this.todoForm.get('bornDate').value,
        this.todoForm.get('state').value,
        this.todoForm.get('city').value,
        this.todoForm.get('address').value,
        "",
        "",
        this.todoForm.get('mail').value,
        this.todoForm.get('password').value,
        ""
    ).subscribe(serverResponse=>{

      this.volunteerService.setVolunteerImage(this.todoForm.get('mail').value,this.base64textString).subscribe(res=>{
        this.router.navigate(['/']);
        alert('Registration Success!!');
          }, error=>{console.log(error);});
         }, error=>{
           console.log(error);
         });
  }


  onFileSelected(event){
    this.selectedFile=event.target.files[0];
    var reader = new FileReader();
    reader.onload =this._handleReaderLoaded.bind(this);
    reader.readAsBinaryString(this.selectedFile);
  }

  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    this.base64textString= btoa(binaryString);
   }


}
