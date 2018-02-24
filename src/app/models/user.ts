import { Injectable } from '@angular/core';

@Injectable()
export class User {
     private username: string;
     private password: string;
     private mail: string;
     private state: string;
     private city: string;
     private address: string;
     private description: string;
     private interest: List;

     constructor(username: string, password: string,mail: string,state: string,city: string,address: string,description: string,interest: List) {
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
