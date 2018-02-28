import { Injectable } from '@angular/core';
import { APIService } from '../common/api.service';
import { AppConfiguration } from '../common/config/app-configuration.service';
import { AuthService } from '../common/auth.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Volunteer } from '../models/volunteer';
import { Observer } from 'rxjs/Observer';
import { User } from '../models/user';
import { Observable } from 'rxjs/Observable';
import { Organization } from '../models/organization';


@Injectable()
export class UsersService extends APIService {

vol: User;

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
        this.authService.rol = loginResponse.rol;
      }
    });
  }


  getUser(username : string){
    return this.get('user/userByUserName/'+username);
  }
  

  updateVolunteer(volunteer : Volunteer){
    return this.put('user/modifyProfileVol',volunteer);
  }

  getVolunteer():Observable<Volunteer>{
    return this.get('user/volunteer');
  }

  createVolunteer(username: string, password: string,mail: string,state: string,city: string,address: string,name: string, lastname: string,gender: string,bornDate: Date) {
      return this.post("user",new Volunteer(username, password,mail,state,city,address,"",[],0,[],name, lastname,gender,bornDate,0,""));
    }

  createOrganization(username:string, password: string, mail: string, state: string, city: string, address: string, commercialName: string, businessName: string, NIT: Number) {
        return this.post("user",new Organization(username, password, mail, state, city, address, "", [], 0, [], commercialName, businessName, NIT,""));
    }



}