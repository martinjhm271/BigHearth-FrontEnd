import { Injectable } from "@angular/core";

@Injectable()
export class Localitation {

    public latitude: Number;
     public longitude:Number;


     constructor(latitude: Number, longitude:Number) {
         this.latitude = latitude;
         this.longitude = longitude;
     }

 }