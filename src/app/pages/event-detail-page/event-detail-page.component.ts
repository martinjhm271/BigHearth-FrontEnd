import{Component, OnInit}from '@angular/core';
import { AuthService } from '../../common/auth.service';
import {EventService}from '../../services/event.service';
import { Event } from '../../models/event';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-event-detail-page',
  templateUrl: './event-detail-page.component.html'
})

export class EventDetailPageComponent implements OnInit {
 private events: Event[]=[];

  constructor(public eventService: EventService,public authService: AuthService) {

  }

  ngOnInit() {
    this.eventService.getEvents().subscribe(eventsResponse=>{
      this.events = eventsResponse;
    })
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  signOut() {
    this.authService.signOut();
  }


}