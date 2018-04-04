import { Injectable } from '@angular/core';
import { APIService } from '../common/api.service';
import { AppConfiguration } from '../common/config/app-configuration.service';
import { AuthService } from '../common/auth.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Volunteer } from '../models/volunteer';
import { Observer } from 'rxjs/Observer';
import { Roles } from '../models/Roles';
import { RolUser } from '../models/RolUser';
import { Observable } from 'rxjs/Observable';
import { Organization } from '../models/organization';


@Injectable()
export class VolunteerService extends APIService {


constructor(
    public config: AppConfiguration,
    public authService: AuthService,
    public http: Http
  ) {
    super(config, authService, http);
  }


  getVolunteerByEmail(email : string):Observable<Volunteer>{
    return this.get('volunteer/'+email);
  }
  
    getEvents(email:string):Observable<Event[]>{
        return this.get('volunteer/'+email+'/events');
    }
  updateVolunteer(volunteer : Volunteer){
    return this.put('volunteer/modifyProfileVol',volunteer);
  }

  createVolunteer(name: string,lastname: string,gender: string,bornDate: Date,state: string,city: string,address: string,description: string,photo: any,mail: string,password: string,volInterest: string) {
      return this.post("volunteer",new Volunteer(0,name,lastname,gender,bornDate,0,state,city,address,description,0,photo,new RolUser(mail,new Roles(2,"Volunteer")),password,volInterest,[]));
    }


}