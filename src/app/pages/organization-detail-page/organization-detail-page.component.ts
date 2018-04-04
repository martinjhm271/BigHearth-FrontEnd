import{Component, OnInit}from '@angular/core';
import { AuthService } from '../../common/auth.service';
import { OrganizationService } from '../../services/organization.service';
import { Organization } from '../../models/organization';
import { Event } from '../../models/event';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { RolUser } from '../../models/rolUser';
import { Roles } from '../../models/roles';

@Component({
  selector: 'app-organization-detail-page',
  templateUrl: './organization-detail-page.component.html'
})

export class OrganizationDetailPageComponent implements OnInit {
  public users: Organization[]=[];
  public events: Event[]=[];

  constructor(public router: Router,public organizationService: OrganizationService,public authService: AuthService) {

  }

  ngOnInit() {
    if(sessionStorage.getItem("clickedUser")==null){
        this.organizationService.getOrganizationByEmail(sessionStorage.getItem("currentUser")).subscribe(userResponse=>{
          this.users.push(userResponse);
          this.users[0].mail=new RolUser(sessionStorage.getItem("currentUser"),new Roles(1,"Organization"));
          this.events=userResponse.myEvents;
          console.info(userResponse);
        })
    }else{
        this.organizationService.getOrganizationByEmail(sessionStorage.getItem("clickedUser")).subscribe(userResponse=>{
                  this.users.push(userResponse);
                  this.events=userResponse.myEvents;

                })
    }

  }


  detailFunc(eventId,eventName) {
      sessionStorage.setItem("clickedEvent", eventId);
      this.router.navigate(['/eventDetail']);
    }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  signOut() {
    this.authService.signOut();
  }


}