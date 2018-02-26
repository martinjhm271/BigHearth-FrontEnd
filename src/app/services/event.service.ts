import { Injectable } from '@angular/core';
import { APIService } from '../common/api.service';
import { AppConfiguration } from '../common/config/app-configuration.service';
import { AuthService } from '../common/auth.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { Event} from '../models/event';


@Injectable()
export class EventService extends APIService {



constructor(
    public config: AppConfiguration,
    public authService: AuthService,
    public http: Http
  ) {
    super(config, authService, http);
  }



  getEvents(): Observable<Event[]> {
    return this.get("event");
  }

  getEvent( id: Number  ):Observable<Event>{
    return this.get("event/byId."+id);
  }


}