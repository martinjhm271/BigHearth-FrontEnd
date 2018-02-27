import{Component, OnInit}from '@angular/core';
import { AuthService } from '../../common/auth.service';
import {EventService}from '../../services/event.service';
import { Event } from '../../models/event';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-detail-page-organitation',
  templateUrl: './event-detail-page-organitation.component.html'
})

export class EventDetailPageOrganitationComponent implements OnInit {  
 public volunteersEmails: string[]=[];
 private modalBody:string='';

  constructor(private modalService: NgbModal,public router: Router,public eventService: EventService,public authService: AuthService) {

  }

  ngOnInit() {
    this.eventService.getEmailUserOfEvent(sessionStorage.getItem("currentUser"),
                                          sessionStorage.getItem("clickedEvent")).subscribe(eventResponse=>{
      this.volunteersEmails=eventResponse;
    })
  }

  detailFunc(username) {
      sessionStorage.setItem("clickedUser", username);
      this.router.navigate(['/userDetails']);
    }


  ver(modal){
    this.modalService.open(modal);
  }
  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  signOut() {
    this.authService.signOut();
  }


}