import { Injectable } from '@angular/core';
import { APIService } from '../common/api.service';
import { AppConfiguration } from '../common/config/app-configuration.service';
import { AuthService } from '../common/auth.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Volunteer } from '../models/volunteer';
import { Observer } from 'rxjs/Observer';
import { Roles } from '../models/roles';
import { RolUser } from '../models/rolUser';
import { Observable } from 'rxjs/Observable';
import { Organization } from '../models/organization';
import 'rxjs/add/observable/of';

@Injectable()
export class OrganizationService extends APIService {


constructor(
    public config: AppConfiguration,
    public authService: AuthService,
    public http: Http
  ) {
    super(config, authService, http);
  }

  getOrganizationByEmail(email : string):Observable<Organization>{
    return this.get('organization/'+email);
  }

    getOrganizationByIdEvent(id : Number):Observable<Organization>{
        return this.get('organization/event/'+id);
      }

  getEvents(NIT:Number):Observable<Event[]>{
    return this.get('organization/'+NIT+'/events')
  }

  updateOrganization(organization : Organization){
    console.info(organization);

    return this.post('organization/modifyProfileOrg',organization);
  }

  createOrganization(commercialName: string,businessName: string,state: string,city: string,address: string,description: string,mail: string,photo: string,password: string,nit: Number):Observable<Organization>{
        return this.post("organization",new Organization(commercialName, businessName, state, city, address, description, new RolUser(mail,new Roles(1,"Organization")), photo, password, nit, 0,[]));
    }

    setOrganizationImage(email,base64Image): Observable<Organization>{
      return this.post("organization/"+email+"/image/upload",base64Image);
    }
  
    getOrganizationImage(email) : Observable<string>{
      return this.get("organization/"+email+"/image");
    }

}