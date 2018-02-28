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
    return this.post(this.resourceUrl,new Event(new EventId(id,name),maxVolunteers,eventType,description,eventDate,image,volunteers,"Test"));

  }

    unrolUser(id:Number ,username: string):Observable<boolean>{
      return this.post("event/unrol/"+id+"/"+username,null);
    }

    rol(evenId:string,username:string):Observable<boolean>{
      console.log(evenId.substring(0,evenId.indexOf(".")));
      return this.post("event/rol/"+evenId.substring(0,evenId.indexOf("."))+"/"+username,null);
    }

  getEvents(): Observable<Event[]> {
      return this.get("event");
    }
    getEvent( idname:string  ):Observable<Event>
        {
           return this.get("event/"+idname);
        }


}