import{Component, OnInit}from '@angular/core';
import { AuthService } from '../../common/auth.service';
import {EventService}from '../../services/event.service';
import { Event } from '../../models/event';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import {FormGroup, FormBuilder, FormControl} from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-event-detail-page',
  templateUrl: './event-detail-page.component.html',
  styleUrls: ['./event-detail-page.component.css']
})

export class EventDetailPageComponent implements OnInit {
  private newMessageEmail: FormGroup;
  public events: Event[]=[];
  public volunteers: string[]=[];

  constructor(public formBuilder: FormBuilder,private modalService: NgbModal,public router: Router,public eventService: EventService,public authService: AuthService) {

  }

  ngOnInit() {
    this.eventService.getEvent(sessionStorage.getItem("clickedEvent")).subscribe(eventResponse=>{
      this.events.push(eventResponse);
      this.volunteers=eventResponse.volunteers;
    })
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

  detailFunc(username) {
      sessionStorage.setItem("clickedVolunteer", username);
      this.router.navigate(['/volunteerDetails']);
    }
  
  detailFunc2(organization) {
      sessionStorage.setItem("clickedOrganization", organization);
      this.router.navigate(['/organizationDetails']);

  }

  ver(modal){
    this.modalService.open(modal);
  }

  consultUserinEvent(username:string): boolean{
    for (let volunteer of this.volunteers) {
        if(volunteer === username){
            return true;
        }
    }
    return false;
 }

  isVolunteer():boolean{ 
    return this.authService.rol=="Volunteer" && !this.consultUserinEvent(sessionStorage.getItem("currentUser"));
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