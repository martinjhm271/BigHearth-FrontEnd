import{Component, OnInit}from '@angular/core';
import { AuthService } from '../../common/auth.service';
import {EventService}from '../../services/event.service';
import {VolunteerService}from '../../services/volunteer.service';
import {OrganizationService}from '../../services/organization.service';
import {Volunteer}from '../../models/volunteer';
import { Event } from '../../models/event';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import {FormGroup, FormBuilder, FormControl} from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { RolUser } from '../../models/rolUser';
import { Roles } from '../../models/roles';
import { Organization } from '../../models/organization';


@Component({
  selector: 'app-event-detail-page',
  templateUrl: './event-detail-page.component.html',
  styleUrls: ['./event-detail-page.component.css']
})

export class EventDetailPageComponent implements OnInit {
  private newMessageEmail: FormGroup;
  public events: Event[]=[];
  public volunteers: Volunteer[]=[];
  public latitude:Number;
  public longitude:Number;
  public organizacion: Organization;

  constructor(
  public formBuilder: FormBuilder,
  private modalService: NgbModal,
  public router: Router,
  public eventService: EventService,
  public authService: AuthService,
  public volunteerService: VolunteerService,
  public organizationService: OrganizationService
  ) {

  }



 ngOnInit() {
    this.organizationService.getOrganizationByIdEvent(+sessionStorage.getItem("clickedEvent")).subscribe(OrganizationRes =>{
      console.log("entro");
      this.organizacion = OrganizationRes;
      console.log(this.organizacion);
      console.log("sal");
    });
    
    this.eventService.getEvent(sessionStorage.getItem("clickedEvent")).subscribe(eventResponse => {
      console.log("entro2");
      this.events.push(eventResponse);
      this.volunteers=eventResponse.volunteers;
      this.latitude=eventResponse.latitude;
      this.longitude=eventResponse.longitude;
      this.events[0].organization = this.organizacion;
      console.log("sal2");
    });

    this.newMessageEmail = this.formBuilder.group({
      email:'',
      Subject:''
    });
  }

  
  

  onSubmit() {
    this.eventService.sendMailEvent(sessionStorage.getItem("clickedEvent"),[this.newMessageEmail.get('Subject').value,this.newMessageEmail.get('email').value]).subscribe(serverResponse=>{
      this.router.navigate(['/eventList']);
    }, error=>{
      console.log(error);
    });
  }

  detailFunc(volunteer) {
    
      sessionStorage.setItem("clickedVolunteer", volunteer.vol_id);
      this.router.navigate(['/volunteerDetails']);
    }
  
  detailFunc2() {
      sessionStorage.setItem("clickedOrganization", this.organizacion.businessName);
      this.router.navigate(['/organizationDetails']);

  }

  selectLocation(event){
    this.latitude=event.coords.lat;
    this.longitude=event.coords.lng;
  }

  ver(modal){
    this.modalService.open(modal);
  }

  consultUserinEvent(id:string): boolean{

    for (let volunteer of this.volunteers) {
        if(volunteer.vol_id === +id){
            return true;
        }
        console.info(this.volunteers);
    }
    return false;
 }

  isVolunteer():boolean{ 
    return this.authService.rol=="volunteer" && !this.consultUserinEvent(localStorage.getItem("id"));
  }
  
  isOrganization():boolean{ 
    return this.authService.rol=="organization";
  }

  rol(){
    this.eventService.rol(sessionStorage.getItem("clickedEvent"),sessionStorage.getItem("currentUser")).subscribe(
      eventResponse => {
        if(eventResponse){
          alert("User rol in event");
          this.router.navigate(['/volunteerDetails']);
        }else{
          alert("User not could rol in event");
        }
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