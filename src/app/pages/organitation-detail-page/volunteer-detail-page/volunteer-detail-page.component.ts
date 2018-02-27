import{Component, OnInit}from '@angular/core';
import { AuthService } from '../../common/auth.service';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user';
import { Event } from '../../models/event';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-volunteer-detail-page',
  templateUrl: './volunteer-detail-page.component.html'
})

export class VolunteerDetailPageComponent implements OnInit {
  public users: User[]=[];
  public events: Event[]=[];

  constructor(public router: Router,public userService: UsersService,public authService: AuthService) {

  }

  ngOnInit() {
    this.userService.getUser(sessionStorage.getItem("clickedVolunteer")).subscribe(userResponse=>{
      this.users.push(userResponse);
      this.events=userResponse.eventRegistered;
    })
  }

  detailFunc(eventId,eventName) {
      sessionStorage.setItem("clickedEvent", eventId+"."+eventName);
      this.router.navigate(['/eventDetails']);
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  signOut() {
    this.authService.signOut();
  }


}