import { Injectable } from '@angular/core';
import { User} from '../models/user';
import { Event} from '../models/event';

@Injectable()
export class Volunteer extends User{

        private vol_id: Number;
        private name: string;
        private lastname: string;
        private gender: string;
        private bornDate: Date;
        private hours: Number;
        private state: string;
        private city: string;
        private address: string;
        private description: string;
        private volunteerMade: Number;
        private photo: string;
        private mail: RolUser;
        private password: string;
        private volInterest: string[];



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
                             photo: string,
                             mail: RolUser,
                             password: string,
                             volInterest: string[]

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

        }

      


}