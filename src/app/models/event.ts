import { Injectable } from '@angular/core';
import { Volunteer } from './Volunteer';
import { Organization } from './Organization';
import { Review } from './Review';
import { Requirement } from './Requirement';

@Injectable()
export class Event {

     public id: Number;
     private maxVolunteers: Number;
     private name:string;
     private eventType:string;
     private description:string;
     private eventDate:Date;
     private image:string;
     public volunteers:Volunteer[];
     public organization:Organization;
     public reviews:Review[];
     public requirements:Requirement[];
     public latitude:Number;
     public longitude:Number;


     constructor(id: Number,name:string,maxVolunteers:Number, eventType: string, description: string,eventDate:Date,image:string,volunteers:Volunteer[],organization:Organization,reviews:Review[],requirements:Requirement[],latitude:Number,longitude:Number) {
         this.id=id;
         this.maxVolunteers = maxVolunteers;
         this.name = name;
         this.eventType = eventType;
         this.description = description;
         this.eventDate = eventDate;
         this.image = image;
         this.volunteers = volunteers;
         this.organization=organization;
         this.reviews=reviews;
         this.requirements=requirements;
         this.latitude=latitude;
         this.longitude=longitude;

     }

 }
