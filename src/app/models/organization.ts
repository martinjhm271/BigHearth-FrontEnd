import { Injectable } from '@angular/core';
import { RolUser} from '../models/rolUser';
import { Event} from '../models/event';

@Injectable()
export class Organization{

        public commercialName: string;
        public businessName: string;
        public state: string;
        public city: string;
        public address: string;
        public description: string;
        public mail: RolUser;
        public photo: string;
        public password: string;
        public nit: Number;
        public volunteersMade: Number;
        public myEvents:Event[];


        constructor(commercialName: string,
                    businessName: string,
                    state: string,
                    city: string,
                    address: string,
                    description: string,
                    mail: RolUser,
                    photo: string,
                    password: string,
                    nit: Number,
                    volunteersMade: Number,
                    myEvents:Event[]) {

                this.commercialName = commercialName;
                this.businessName = businessName;
                this.state = state;
                this.city = city;
                this.address = address;
                this.description = description;
                this.mail = mail;
                this.photo = photo;
                this.password = password;
                this.nit = nit;
                this.volunteersMade = volunteersMade;
                this.myEvents = myEvents;
        }
}