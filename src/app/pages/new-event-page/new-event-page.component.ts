import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../common/auth.service';
import {FormGroup, FormBuilder} from '@angular/forms';
import {Router}from '@angular/router';

import {EventsService}from '../../services/events.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './new-event-page.component.html',
  styleUrls: ['./new-event-page.component.css']
})
export class NewEventPageComponent implements OnInit {

  private newEventForm: FormGroup;

  constructor(public authService: AuthService, public eventService: EventsService, 
              public formBuilder: FormBuilder,public router: Router) { }

  ngOnInit() {
    this.newEventForm = this.formBuilder.group({
      newVoluntieer: '',
      newImageVoluntieer: '',
      ManyVoluntieer: '',
      commentVolunteer:'',
      typeOfVolunteer:'',
      dateVolunteer:''
    });
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  signOut() {
    this.authService.signOut();
  }

  onSubmit() {
    this.eventService.create(0,
      this.newEventForm.get('newVoluntieer').value,
      this.newEventForm.get('newImageVoluntieer').value,
      this.newEventForm.get('ManyVoluntieer').value,
      this.newEventForm.get('commentVolunteer').value,
      this.newEventForm.get('typeOfVolunteer').value,
      this.newEventForm.get('dateVolunteer').value).subscribe(serverResponse=>{
        this.router.navigate(['/']);
    }, error=>{
      console.log(error);
    });

    this.router.navigate(['/users']);
  }

      

}