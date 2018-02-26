import { Injectable } from '@angular/core';
import { APIService } from '../common/api.service';
import { AppConfiguration } from '../common/config/app-configuration.service';
import { AuthService } from '../common/auth.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { Event} from '../models/event';


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

  create(id: Number,maxVolunteers:Number,name:String,eventType:String,description:String,eventDate:Date,image:String,volunteers:any[]): Observable<Event> {
    return this.post(this.resourceUrl,new Event(id,maxVolunteers,name,eventType,description,eventDate,image,volunteers));

  }

  getEvents(): Observable<Event[]> {
      return this.get("event");
    }
    getEvent( id: Number  ):Observable<Event>
        {
           return this.get("event/"+id);
        }


}