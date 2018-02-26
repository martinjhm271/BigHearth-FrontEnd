import { Injectable } from '@angular/core';
import { User} from '../models/user';

@Injectable()
export class Volunteer extends User{
private name: string;
private lastname: string;
private gender: string;
private bornDate: Date;
private hours: Number;
private volunteersMade: Number;


constructor(username: string, password: string,mail: string,state: string,city: string,address: string,description: string,interest: any[],name: string, lastname: string,gender: string,bornDate: Date,hours: Number,volunteersMade: Number) {
        super(username,password,mail,state,city,address,description,interest);
        this.name = name;
        this.lastname = lastname;
        this.gender = gender;
        this.bornDate = bornDate;
        this.hours = hours;
        this.volunteersMade = volunteersMade;
     }
}