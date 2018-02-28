import { Injectable } from "@angular/core";

@Injectable()
export class EventId {

    public id: Number;
     private name:string;
     

     constructor(id:Number, name: string) {
         this.id = id;
         this.name = name;
     }

 }
