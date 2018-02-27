import { Injectable } from '@angular/core';
import { User} from '../models/user';

@Injectable()
export class Organization extends User{
private volunteersMade: Number;
private eventRegistered: any[];
private commercialName: string;
private businessName: string;
private NIT: Number;
private image: string;


constructor(username:string, password: string, mail: string, state: string, city: string, address: string, description: string, interest: any[], volunteersMade: Number, eventRegistered: any[], commercialName: string, businessName: string, NIT: Number,image: string) {
        super(username,password,mail,state,city,address,description,interest);
         this.volunteersMade = volunteersMade;
         this.eventRegistered = eventRegistered;
         this.commercialName = commercialName;
         this.businessName = businessName;
         this.NIT = NIT;
         this.image = image;
     }
 }