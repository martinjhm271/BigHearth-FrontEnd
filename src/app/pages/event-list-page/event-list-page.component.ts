import{Component, OnInit}from '@angular/core';
import { AuthService } from '../../common/auth.service';
import {EventService}from '../../services/event.service';
import { Event } from '../../models/event';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-list-page',
  templateUrl: './event-list-page.component.html'
})

export class EventListPageComponent implements OnInit {
 public events: Event[]=[];

  constructor(public router: Router,public eventService: EventService,public authService: AuthService) {

  }

  ngOnInit() {
    this.eventService.getEvents().subscribe(eventResponse=>{
      this.events=eventResponse;
    })
  }


  detailFunc(eventId,eventName) {
      sessionStorage.setItem("clickedEvent", eventId+"."+eventName);
      this.router.navigate(['/eventDetail']);
    }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  signOut() {
    this.authService.signOut();
  }


}