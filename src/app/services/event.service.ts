import { Injectable } from '@angular/core';
import { APIService } from '../common/api.service';
import { AppConfiguration } from '../common/config/app-configuration.service';
import { AuthService } from '../common/auth.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { Event} from '../models/event';
import { EventId } from '../models/EventId';


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

  create(id: Number,maxVolunteers:Number,name:string,eventType:string,description:string,eventDate:Date,image:string,volunteers:any[]): Observable<Event> {
    return this.post(this.resourceUrl,new Event(new EventId(id,name),maxVolunteers,eventType,description,eventDate,image,volunteers),sessionStorage.getItem("currentUser"));

  }

  getEventsByUser(username:string): Observable<Event[]>{
    return this.get(this.resourceUrl+"/userEvents/"+username);
  }

  getEmailUserOfEvent(username:string,eventIdName:string):Observable<string[]>{
    return this.get(this.resourceUrl+"/userEmailsEvents/"+username+"/"+eventIdName);
  }

  getEvents(): Observable<Event[]> {
      return this.get(this.resourceUrl);
    }
    getEvent( idname:string  ):Observable<Event>
        {
           return this.get(this.resourceUrl+"/"+idname);
        }
    sendMailEvent(eventIdName:string,lista:string[]):Observable<Boolean>{
      return this.post(this.resourceUrl+"/sendMailEvent/"+eventIdName,lista);
    }
  
}