import { Injectable } from "@angular/core";

@Injectable()
export class Review {

    public id: Number;
    public comment:string;
    public score: Number;
    public eventId: Number;

     

     constructor(id:Number, comment: string,score: Number,eventId: Number) {
         this.id = id;
         this.comment = comment;
         this.score = score;
         this.eventId=eventId;
     }

 }
