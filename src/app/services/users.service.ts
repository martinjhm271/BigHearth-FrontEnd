import { Injectable } from '@angular/core';
import { APIService } from '../common/api.service';
import { AppConfiguration } from '../common/config/app-configuration.service';
import { AuthService } from '../common/auth.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Volunteer } from '../models/volunteer';
import { Organization } from '../models/organization';

@Injectable()
export class UsersService extends APIService {



constructor(
    public config: AppConfiguration,
    public authService: AuthService,
    public http: Http
  ) {
    super(config, authService, http);
  }

  login(username: string, password: string) {
    return this.post('user/login', { username, password }, { credentials: false }).map(loginResponse => {
      if (loginResponse) {
        this.authService.accessToken = loginResponse.accessToken;
      }
    });
  }

  createVolunteer(username: string, password: string,mail: string,state: string,city: string,address: string,name: string, lastname: string,gender: string,bornDate: Date) {
      return this.post("user",new Volunteer(username, password,mail,state,city,address,"",[],name, lastname,gender,bornDate,0,0));
    }

  createOrganization(username:string, password: string, mail: string, state: string, city: string, address: string, commercialName: string, businessName: string, NIT: Number) {
        return this.post("user",new Organization(username, password, mail, state, city, address, "", [], 0, [], commercialName, businessName, NIT,""));
    }


}