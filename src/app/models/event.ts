import { Injectable } from '@angular/core';

@Injectable()
export class Event {
    public id: Number;
    public name: String;
    public image: String;
    public maxVolunteers: Number;
    public description: String ;
    public type: String;
    public eventDate: Date;
    public volunteers: any[];
    constructor(id: Number,maxVolunteers:Number,name:String,type:String,description:String,eventDate:Date,image:String,volunteers:any[]) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.maxVolunteers = maxVolunteers;
        this.description = description;
        this.type = type;
        this.eventDate = eventDate;
        this.volunteers=volunteers;
    }
}