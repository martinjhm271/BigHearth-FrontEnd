import { Injectable } from '@angular/core';

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

constructor(username: string, password: string,mail: string,state: string,city: string,address: string,description: string,interest: any[]) {
         this.username = username;
         this.password = password;
         this.mail = mail;
         this.state = state;
         this.city = city;
         this.address = address;
         this.description = description;
         this.interest = interest;
     }
 }