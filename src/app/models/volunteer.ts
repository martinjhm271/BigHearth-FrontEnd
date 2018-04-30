import { Injectable } from '@angular/core';
import { RolUser} from '../models/rolUser';
import { Event} from '../models/event';

@Injectable()
export class Volunteer{

        public vol_id: Number;
        public name: string;
        public lastname: string;
        public gender: string;
        public bornDate: Date;
        public hours: Number;
        public state: string;
        public city: string;
        public address: string;
        public description: string;
        public volunteerMade: Number;
        public photo: Blob;
        public mail: RolUser;
        public password: string;
        public volInterest: string;
        public myEvents:Event[];



        constructor( vol_id: Number,
                             name: string,
                             lastname: string,
                             gender: string,
                             bornDate: Date,
                             hours: Number,
                             state: string,
                             city: string,
                             address: string,
                             description: string,
                             volunteerMade: Number,
                             photo: Blob,
                             mail: RolUser,
                             password: string,
                             volInterest: string,
                             myEvents:Event[]

        ) {

                this.vol_id = vol_id;
                this.name = name;
                this.lastname = lastname;
                this.gender = gender;
                this.bornDate = bornDate;
                this.hours = hours;
                this.state = state;
                this.city = city;
                this.address = address;
                this.description = description;
                this.volunteerMade = volunteerMade;
                this.photo = photo;
                this.mail = mail;
                this.password = password;
                this.volInterest = volInterest;
                this.myEvents = myEvents;

        }

      


}