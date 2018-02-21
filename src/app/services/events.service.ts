import { Injectable } from '@angular/core';
import { APIService } from '../common/api.service';
import { AppConfiguration } from '../common/config/app-configuration.service';
import { AuthService } from '../common/auth.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';


import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';

import { Event } from '../models/Event';

@Injectable()
export class EventsService extends APIService {

private resourceUrl = 'event';

constructor(
    public config: AppConfiguration,
    public authService: AuthService,
    public http: Http
  ) {
    super(config, authService, http);
  }

  create(eventId: Number, eventName: string, URLImage: string, cantVolunteer: Number, commentEvent: string, eventType: string, dateEvent: Date): Observable<Event[]> {
    return this.post(this.resourceUrl,new Event(eventId, eventName, URLImage, cantVolunteer,commentEvent,eventType, dateEvent));

  }
}
