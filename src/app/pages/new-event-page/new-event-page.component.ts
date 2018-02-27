import{Component, OnInit}from '@angular/core';
import {Router}from '@angular/router';
import {FormGroup, FormBuilder, FormControl} from '@angular/forms';
import { AuthService } from '../../common/auth.service';

import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-new-event-page',
  templateUrl: './new-event-page.component.html',
  styleUrls: ['./new-event-page.component.css']
})
export class NewEventPageComponent implements OnInit {
  private newEventForm: FormGroup;
  eventTypess = new FormControl();

  toppingList = ['AMBIENTAL', 'COMUNITARIO', 'CULTURAL', 'EDUCATIVO', 'INTERNACIONAL',
                 'PROTECCIÓN CIVIL','DEPORTIVO','SOCIO-SANITARIO','SOCIAL','OCIO Y TIEMPO LIBRE'];
  public eventTypes: object[]=[
      {id: '1', name: 'AMBIENTAL'},{id: '2', name: 'COMUNITARIO'},
      {id: '3', name: 'CULTURAL'},{id: '4', name: 'EDUCATIVO'},
      {id: '5', name: 'INTERNACIONAL'},{id: '6', name: 'PROTECCIÓN CIVIL'},
      {id: '7', name: 'DEPORTIVO'},{id: '8', name: 'SOCIO-SANITARIO'},
      {id: '9', name: 'SOCIAL'},{id: '10', name: 'OCIO Y TIEMPO LIBRE'}
    ]

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