import { Injectable } from '@angular/core';
import { EventId } from './EventId';
import { Localitation } from './Localitation';

@Injectable()
export class Event {

    private eventId: EventId;
    private localitation: Localitation;
     private maxVolunteers: Number;
     private name:string;
     private eventType:string;
     private description:string;
     private eventDate:Date;
     private image:string;
     public volunteers:string[];

     constructor(eventId: EventId,maxVolunteers:Number, eventType: string, description: string,eventDate:Date,image:string,volunteers:string[],localitation:Localitation) {
         this.eventId = eventId;
         this.maxVolunteers = maxVolunteers;
         this.name = name;
         this.eventType = eventType;
         this.description = description;
         this.eventDate = eventDate;
         this.image = image;
         this.volunteers = volunteers;
         this.localitation=localitation;
     }

 }
