import{Component, OnInit}from '@angular/core';
import { AuthService } from '../../common/auth.service';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user';
import { Event } from '../../models/event';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-organization-detail-page',
  templateUrl: './organization-detail-page.component.html'
})

export class OrganizationDetailPageComponent implements OnInit {
  public users: User[]=[];
  public events: Event[]=[];

  constructor(public router: Router,public userService: UsersService,public authService: AuthService) {

  }

  ngOnInit() {
    if(sessionStorage.getItem("clickedUser")==null){
        this.userService.getUser(sessionStorage.getItem("currentUser")).subscribe(userResponse=>{
          this.users.push(userResponse);
          this.events=userResponse.eventRegistered;
          console.info(userResponse);
        })
    }else{
        this.userService.getUser(sessionStorage.getItem("clickedUser")).subscribe(userResponse=>{
        console.info("2");
                  this.users.push(userResponse);
                  this.events=userResponse.eventRegistered;
                })
    }

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