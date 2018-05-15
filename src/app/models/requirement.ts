import { Injectable } from '@angular/core';


@Injectable()
export class Requirement {

    public id: Number;
    public name:string;
    public quantity: Number;
    public eventId: Number;
     

    constructor(id:Number, name: string,quantity: Number,eventId: Number) {
        this.id = id;
        this.name = name;
        this.quantity=quantity;
        this.eventId=eventId;

    }

 }