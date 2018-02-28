import{Component, OnInit, ViewChild}from '@angular/core';
import { AuthService } from '../../common/auth.service';
import {EventService}from '../../services/event.service';
import { Event } from '../../models/event';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import {FormGroup, FormBuilder, FormControl} from '@angular/forms';

@Component({
  selector: 'app-event-detail-page-organitation',
  templateUrl: './event-detail-page-organitation.component.html'
})

export class EventDetailPageOrganitationComponent implements OnInit {  
 private newMessageEmail: FormGroup;
 public events: Event[]=[];
 public volunteers: string[]=[];

  constructor(private modalService: NgbModal,
    public formBuilder: FormBuilder,public router: Router,public eventService: EventService,public authService: AuthService) {

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