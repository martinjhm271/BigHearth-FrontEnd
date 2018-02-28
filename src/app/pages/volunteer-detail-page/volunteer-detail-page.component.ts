import{Component, OnInit}from '@angular/core';
import { AuthService } from '../../common/auth.service';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user';
import { Event } from '../../models/event';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-volunteer-detail-page',
  templateUrl: './volunteer-detail-page.component.html'
})

export class VolunteerDetailPageComponent implements OnInit {
  public users: User[]=[];
  public events: Event[]=[];

  constructor(public router: Router,public userService: UsersService,public authService: AuthService,public eventService: EventService ) {

  }

  ngOnInit() {
    if(sessionStorage.getItem("clickedUser")==null){
            this.userService.getUser(sessionStorage.getItem("currentUser")).subscribe(userResponse=>{
                console.info(userResponse);
              this.users.push(userResponse);
              this.events=userResponse.eventRegistered;
            })
        }else{
            this.userService.getUser(sessionStorage.getItem("clickedUser")).subscribe(userResponse=>{
                console.info(userResponse);
                      this.users.push(userResponse);
                      this.events=userResponse.eventRegistered;
                    })
        }
  }

  detailFunc(eventId,eventName) {
      sessionStorage.setItem("clickedEvent", eventId+"."+eventName);
      this.router.navigate(['/eventDetail']);
  }

   unrol(id){
        console.info("----------------------");
        this.eventService.unrolUser(id,sessionStorage.getItem("currentUser"));
        this.router.navigate(['/volunteerDetails']);
      }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  signOut() {
    this.authService.signOut();
  }


}