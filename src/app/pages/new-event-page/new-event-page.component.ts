import{Component, OnInit}from '@angular/core';
import {Router}from '@angular/router';
import {FormGroup, FormBuilder} from '@angular/forms';
import { AuthService } from '../../common/auth.service';

import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-new-event-page',
  templateUrl: './new-event-page.component.html',
  styleUrls: ['./new-event-page.component.css']
})
export class NewEventPageComponent implements OnInit {
  private newEventForm: FormGroup;

  constructor(
    public authService: AuthService,
    public eventService: EventService,
    public formBuilder: FormBuilder,
    public router: Router,
  ) {

  }

  ngOnInit() {
    this.newEventForm = this.formBuilder.group({
      maxVolunteers:'',
      name:'',
      eventType:'',
      description:'',
      eventDate:'',
      image:''

    });
  }

  onSubmit() {
    this.eventService.create(0,
      this.newEventForm.get('maxVolunteers').value,
      this.newEventForm.get('name').value,
      this.newEventForm.get('eventType').value,
      this.newEventForm.get('description').value,
      this.newEventForm.get('eventDate').value,
      this.newEventForm.get('image').value,new Array()).subscribe(serverResponse=>{
        this.router.navigate(['/']);
    }, error=>{
      console.log(error);
    });

    this.router.navigate(['/']);
  }

isLoggedIn() {
      return this.authService.isLoggedIn();
    }

    signOut() {
      this.authService.signOut();
    }

}