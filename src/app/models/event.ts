import { Injectable } from '@angular/core';
import { Volunteer } from './volunteer';
import { Organization } from './organization';
import { Review } from './review';
import { Requirement } from './requirement';

@Injectable()
export class Event {

     public id: Number;
     public maxVolunteers: Number;
     public name:string;
     public eventType:string;
     public description:string;
     public eventDate:Date;
     public image:Blob;
     public volunteers:Volunteer[];
     public organization:Organization;
     public reviews:Review[];
     public requirements:Requirement[];
     public latitude:Number;
     public longitude:Number;

     constructor(id: Number,name:string,maxVolunteers:Number, eventType: string, description: string,eventDate:Date,image:Blob,volunteers:Volunteer[],organization:Organization,reviews:Review[],requirements:Requirement[],latitude:Number,longitude:Number) {
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
