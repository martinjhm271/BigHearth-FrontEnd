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
export class OrganizationService extends APIService {


constructor(
    public config: AppConfiguration,
    public authService: AuthService,
    public http: Http
  ) {
    super(config, authService, http);
  }


  getOrganizationByEmail(email : string){
    return this.get('organization/organizationByEmail/'+email);
  }
  


  updateOrganization(organization : Organization){
    return this.put('organization/modifyProfileOrg',organization);
  }

  createOrganization(commercialName: string,businessName: string,state: string,city: string,address: string,description: string,mail: string,photo: any,password: string,nit: string) {
        return this.post("organization",new Organization(commercialName, businessName, state, city, address, description, new RolUser(mail,new Roles(1,"Organization")), photo, password, nit, 0));
    }



}