import { Injectable } from '@angular/core';


@Injectable()
export class Volunteer extends User{
     private name: string;
     private lastname: string;
     private gender: string;
     private bornDate: Date;
     private hours: Number;
     private volunteersParticiped: Number;


     constructor(name: string, lastname: string,gender: string,bornDate: Date,hours: Number,volunteersParticiped: Number) {
         this.name = name;
         this.lastname = lastname;
         this.gender = gender;
         this.bornDate = bornDate;
         this.hours = hours;
         this.volunteersParticiped = volunteersParticiped;
     }
 }