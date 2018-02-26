import { Injectable } from '@angular/core';
import { Volunteer } from './volunteer';

@Injectable()
export class Event {

     private id: Number;
     private maxVolunteers: Number;
     private name:string;
     private type:string;
     private description:string;
     private eventDate:Date;
     private image:String;
     private volunteers:Volunteer[];

     constructor(id: Number,maxVolunteers:Number,name: string, type: string, description: string,eventDate:Date,image:string,volunteers:Volunteer[]) {
         this.id = id;
         this.maxVolunteers = maxVolunteers;
         this.name = name;
         this.type = type;
         this.description = description;
         this.eventDate = eventDate;
         this.image = image;
         this.volunteers = volunteers;
     }
 }
