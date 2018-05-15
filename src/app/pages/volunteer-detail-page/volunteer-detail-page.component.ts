import{Component, OnInit}from '@angular/core';
import { AuthService } from '../../common/auth.service';
import { VolunteerService } from '../../services/volunteer.service';
import { Volunteer } from '../../models/volunteer';
import { Event } from '../../models/event';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { EventService } from '../../services/event.service';
import { RolUser } from '../../models/rolUser';
import { Roles } from '../../models/roles';


@Component({
  selector: 'app-volunteer-detail-page',
  templateUrl: './volunteer-detail-page.component.html'
})

export class VolunteerDetailPageComponent implements OnInit {
  public users: Volunteer[]=[];
  public events: any[]=[];

  constructor(
  public router: Router,
  public volunteerService: VolunteerService,
  public authService: AuthService,
  public eventService: EventService
   ) {

  }

  ngOnInit() {
    if(sessionStorage.getItem("clickedVolunteer")==null){

            this.volunteerService.getVolunteerByEmail(sessionStorage.getItem("currentUser")).subscribe(userResponse=>{
              this.users.push(userResponse);
              this.users[0].mail=new RolUser(sessionStorage.getItem("currentUser"),new Roles(2,"volunteer"));
              this.volunteerService.getEvents(sessionStorage.getItem("currentUser")).subscribe(userResponse=>{
                this.events=userResponse;
              });
            })
        }else{

          this.volunteerService.getVolunteerById(sessionStorage.getItem("clickedVolunteer")).subscribe(userResponse=>{
            this.users.push(userResponse);
            this.volunteerService.getEventsById(sessionStorage.getItem("clickedVolunteer")).subscribe(eventResponse=>{
              console.info(eventResponse);
              this.events=eventResponse;
            });
          });
        }
  }

  detailFunc(eventId) {
      sessionStorage.setItem("clickedEvent", eventId);
      this.router.navigate(['/eventDetail']);
  }

   unrol(id){

        this.eventService.unrolUser(id,sessionStorage.getItem("currentUser")).subscribe(
          response =>{
            console.log(response);
            window.location.reload();
          }
        );
        
      }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  signOut() {
    this.authService.signOut();
  }


}