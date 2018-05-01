import{Component, OnInit}from '@angular/core';
import {Router}from '@angular/router';
import {FormGroup, FormBuilder, FormControl} from '@angular/forms';
import { AuthService } from '../../common/auth.service';

import { EventService } from '../../services/event.service';
import { OrganizationService } from '../../services/organization.service';

import { Organization } from '../../models/organization';

@Component({
  selector: 'app-new-event-page',
  templateUrl: './new-event-page.component.html',
  styleUrls: ['./new-event-page.component.css']
})
export class NewEventPageComponent implements OnInit {
  selectedFile = null;
  private newEventForm: FormGroup;
  eventTypess = new FormControl();
  latitude= 4.6685;
  longitude =-74.0913;
  base64textString="";

  toppingList = ['AMBIENTAL', 'COMUNITARIO', 'CULTURAL', 'EDUCATIVO', 'INTERNACIONAL',
                 'PROTECCIÓN CIVIL','DEPORTIVO','SOCIO-SANITARIO','SOCIAL','OCIO Y TIEMPO LIBRE'];
  public eventTypes: object[]=[
      {id: '1', name: 'AMBIENTAL'},{id: '2', name: 'COMUNITARIO'},
      {id: '3', name: 'CULTURAL'},{id: '4', name: 'EDUCATIVO'},
      {id: '5', name: 'INTERNACIONAL'},{id: '6', name: 'PROTECCIÓN CIVIL'},
      {id: '7', name: 'DEPORTIVO'},{id: '8', name: 'SOCIO-SANITARIO'},
      {id: '9', name: 'SOCIAL'},{id: '10', name: 'OCIO Y TIEMPO LIBRE'}
    ]

  constructor(
    public authService: AuthService,
    public eventService: EventService,
    public organizationService: OrganizationService,
    public formBuilder: FormBuilder,
    public router: Router,
  ) {

  }

  ngOnInit() {
    this.newEventForm = this.formBuilder.group({
      maxVolunteers:'',
      name:'',
      eventType:'',
      description:'',
      eventDate:'',
      image:''

    });
  }
  onSubmit() {
    this.organizationService.getOrganizationByEmail(sessionStorage.getItem("currentUser")).subscribe(userResponse=>{
        this.eventService.create(0,
          this.newEventForm.get('name').value,
          this.newEventForm.get('maxVolunteers').value,
          this.newEventForm.get('eventType').value,
          this.newEventForm.get('description').value,
          this.newEventForm.get('eventDate').value,
          this.base64textString,
          new Array(),
          userResponse,
          new Array(),
          new Array(),
          this.latitude,
          this.longitude).subscribe(serverResponse=>{
          this.eventService.setEventImage(serverResponse.id,this.base64textString).subscribe(res=>{
          this.router.navigate(['/eventList']);
            }, error=>{console.log(error);});
        }, error=>{
          console.log(error);
        });
    });

  }

  selectLocation(event){
    this.latitude=event.coords.lat;
    this.longitude=event.coords.lng;
  }

  isLoggedIn() {
      return this.authService.isLoggedIn();
  }

  signOut() {
      this.authService.signOut();
   }

   onFileSelected(event){
     this.selectedFile=event.target.files[0];
     var reader = new FileReader();
     reader.onload =this._handleReaderLoaded.bind(this);
     reader.readAsBinaryString(this.selectedFile);
   }

   _handleReaderLoaded(readerEvt) {
     var binaryString = readerEvt.target.result;
     this.base64textString= btoa(binaryString);
    }

    getImage = function(data){
      return 'data:image/jpeg;base64,' + data;
  }


}