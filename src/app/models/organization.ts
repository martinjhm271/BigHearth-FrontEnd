import { Injectable } from '@angular/core';
import { User} from '../models/user';
import { Event} from '../models/event';

@Injectable()
export class Organization extends User{
        public businessName: string;
        private commercialName: string;
        private NIT: Number;
        public volunteersMade: Number;

        constructor(username: string, password: string,mail: string,state: string,city: string,address: string,description: string,interest: any[],volunteersMade: Number,eventRegistered:Event[], commercialName: string, businessName: string,NIT: Number, image: string) {
                super(username,password,mail,state,city,address,description,interest,image,eventRegistered);
                this.businessName = businessName;
                this.commercialName = commercialName;
                this.NIT = NIT;
                this.volunteersMade = volunteersMade;
        }
}