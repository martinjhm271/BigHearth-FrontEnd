import{Component, OnInit}from '@angular/core';
import { AuthService } from '../../common/auth.service';
import {EventService}from '../../services/event.service';
import { Event } from '../../models/event';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-event-list-page',
  templateUrl: './event-list-page.component.html'
})

export class EventListPageComponent implements OnInit {
 public events: Event[]=[];

  constructor(public eventService: EventService,public authService: AuthService) {

  }

  ngOnInit() {
    this.eventService.getEvents().subscribe(eventResponse=>{
      this.events=eventResponse;
    })
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  signOut() {
    this.authService.signOut();
  }


}