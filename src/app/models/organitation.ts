import { Injectable } from '@angular/core';
import { User} from '../models/user';
import { Event} from '../models/event';

@Injectable()
export class Organitation extends User{
        private businessName: string;
        private commercialName: string;
        private NIT: Number;
        private volunteersMade: Number;

        constructor(username: string, password: string,mail: string,state: string,city: string,address: string,description: string,interest: any[], image: string, commercialName: string, businessName: string,NIT: Number,volunteersMade: Number,eventRegistered:Event[]) {
                super(username,password,mail,state,city,address,description,interest,image,eventRegistered);
                this.businessName = businessName;
                this.commercialName = commercialName;
                this.NIT = NIT;
                this.volunteersMade = volunteersMade;
        }
}