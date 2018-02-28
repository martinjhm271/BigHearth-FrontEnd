import{Component, OnInit}from '@angular/core';
import { AuthService } from '../../common/auth.service';
import {EventService}from '../../services/event.service';
import { Event } from '../../models/event';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-detail-page',
  templateUrl: './event-detail-page.component.html'
})

export class EventDetailPageComponent implements OnInit {
  public events: Event[]=[];
  public volunteers: string[]=[];

  constructor(public router: Router,public eventService: EventService,public authService: AuthService) {

  }

  ngOnInit() {
    this.eventService.getEvent(sessionStorage.getItem("clickedEvent")).subscribe(eventResponse=>{
      this.events.push(eventResponse);
      this.volunteers=eventResponse.volunteers;
    })
  }

  detailFunc(username) {
      sessionStorage.setItem("clickedVolunteer", username);
      this.router.navigate(['/volunteerDetails']);
    }
  
  detailFunc2(organization) {
      sessionStorage.setItem("clickedOrganization", organization);
      this.router.navigate(['/organizationDetails']);
  }
    
  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  signOut() {
    this.authService.signOut();
  }


}