import { Injectable } from "@angular/core";

@Injectable()
export class Review {

    public id: Number;
    public comment:string;
    public score: Number;

     

     constructor(id:Number, comment: string,score: Number) {
         this.id = id;
         this.comment = comment;
         this.score = score;
     }

 }
