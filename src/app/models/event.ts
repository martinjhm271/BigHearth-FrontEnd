import { Injectable } from '@angular/core';
import { Volunteer } from './volunteer';

@Injectable()
export class Event {

     private id: Number;
     private maxVolunteers: Number;
     private name:String;
     private eventType:String;
     private description:String;
     private eventDate:Date;
     private image:String;
     private volunteers:Volunteer[];

     constructor(id: Number,maxVolunteers:Number,name: String, eventType: String, description: String,eventDate:Date,image:String,volunteers:Volunteer[]) {
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
