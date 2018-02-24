import { Injectable } from '@angular/core';


@Injectable()
export class Event {

     private id: Number;
     private numberOfVolunteers: Number;
     private maxVolunteers: Number;
     private name:string;
     private type:string;
     private description:string;
     private eventDate:Date;
     private image:Blob;
     private volunteers:List<Volunteer>;

     constructor(id: Number,numberOfVolunteers:Number,maxVolunteers:Number,name: string, type: string, description: string,eventDate:Date,image:Blob,volunteers:List<Volunteer>) {
         this.id = id;
         this.numberOfVolunteers = numberOfVolunteers;
         this.maxVolunteers = maxVolunteers;
         this.name = name;
         this.type = type;
         this.description = description;
         this.eventDate = eventDate;
         this.image = image;
         this.volunteers = volunteers;
     }
 }
