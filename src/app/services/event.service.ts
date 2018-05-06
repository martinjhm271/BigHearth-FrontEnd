import { Injectable } from '@angular/core';
import { APIService } from '../common/api.service';
import { AppConfiguration } from '../common/config/app-configuration.service';
import { AuthService } from '../common/auth.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { Event} from '../models/event';
import { Volunteer } from '../models/volunteer';
import { Organization } from '../models/organization';
import { Review } from '../models/review';
import { Requirement } from '../models/requirement';
import 'rxjs/add/observable/of';
import { ResponseContentType } from '@angular/http';

@Injectable()
export class EventService extends APIService {

  private resourceUrl = 'event';

constructor(
    public config: AppConfiguration,
    public authService: AuthService,
    public http: Http
  ) {
    super(config, authService, http);
  }

  create(id: Number,name:string,maxVolunteers:Number, eventType: string, description: string,eventDate:Date,image:string,volunteers:Volunteer[],organization:Organization,reviews:Review[],requirements:Requirement[],latitude:Number,longitude:Number): Observable<Event> {    return this.post(this.resourceUrl+"/createEvent/"+organization.nit,new Event(id,name,maxVolunteers, eventType, description,eventDate,image,volunteers,organization,reviews,requirements,latitude,longitude));
                                                   
  }

    unrolUser(id: string,email: string):Observable<boolean>{
      return this.post("event/unrol/"+id+"/"+email,0);
    }

    rol(id: string,email: string):Observable<boolean>{
      return this.post("event/rol/"+id+"/"+email,0);
    }

  getEvents(): Observable<Event[]> {
      return this.get(this.resourceUrl+"/AllEvent");
    }

  getEvent( idname:string  ):Observable<Event>{
      return this.get(this.resourceUrl+"/"+idname);
  }
  sendMailEvent(eventIdName:string,lista:string[]):Observable<Boolean>{
      return this.post(this.resourceUrl+"/sendMailEvent/"+eventIdName,lista);
  }

  getOrgbyEvent( idEvent:Number  ):Observable<Organization>{
    return this.get(this.resourceUrl+"/orgByEventId/"+idEvent);
  }

  setEventImage(id,base64Image): Observable<Event>{
    return this.post(this.resourceUrl+"/"+id+"/image/upload",base64Image);
  }

  getEventImage(id) : Observable<string>{
    return this.get(this.resourceUrl+"/"+id+"/image");
  }
  
}