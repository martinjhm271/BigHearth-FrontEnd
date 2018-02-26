import { Injectable } from '@angular/core';
import { Volunteer } from './volunteer';

@Injectable()
export class Event {

     private id: Number;
     private maxVolunteers: Number;
     private name:string;
     private eventType:string;
     private description:string;
     private eventDate:Date;
     private image:string;
     public volunteers:string[];

     constructor(id: Number,maxVolunteers:Number,name: string, eventType: string, description: string,eventDate:Date,image:string,volunteers:string[]) {
         this.id = id;
         this.maxVolunteers = maxVolunteers;
         this.name = name;
         this.eventType = eventType;
         this.description = description;
         this.eventDate = eventDate;
         this.image = image;
         this.volunteers = volunteers;
     }

 }
