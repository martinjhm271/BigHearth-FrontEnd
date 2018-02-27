import { Injectable } from '@angular/core';
import {Event} from '../models/event';

@Injectable()
export class User {
public username: string;
public password: string;
public mail: string;
public state: string;
public city: string;
public address: string;
public description: string;
public interest: any[];
public image: string;
public eventRegistered:Event[]=[];

constructor(username: string, password: string,mail: string,state: string,city: string,address: string,description: string,interest: any[], image:string,eventRegistered:Event[]) {
         this.username = username;
         this.password = password;
         this.mail = mail;
         this.state = state;
         this.city = city;
         this.address = address;
         this.description = description;
         this.interest = interest;
         this.image = image;
         this.eventRegistered=eventRegistered;
     }
 }