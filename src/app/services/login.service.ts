import { Injectable } from '@angular/core';
import { APIService } from '../common/api.service';
import { AppConfiguration } from '../common/config/app-configuration.service';
import { AuthService } from '../common/auth.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Volunteer } from '../models/volunteer';
import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';
import { Organization } from '../models/organization';
import 'rxjs/add/observable/of';

@Injectable()
export class LoginService extends APIService {

vol: Volunteer;

constructor(
    public config: AppConfiguration,
    public authService: AuthService,
    public http: Http
  ) {
    super(config, authService, http);
  }

  login(email: string, password: string) {
    return this.post('login/login', { email, password }, { credentials: false }).map(loginResponse => {
      if (loginResponse) {
        this.authService.accessToken = loginResponse.accessToken;
        this.authService.rol = loginResponse.rol;
        this.authService.id = loginResponse.id;
      }
    });
  }
}