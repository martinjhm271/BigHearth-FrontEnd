import { Injectable } from "@angular/core";

@Injectable()
export class Localitation {

    private latitude: Number;
     private longitude:Number;
     

     constructor(latitude: Number, longitude:Number) {
         this.latitude = latitude;
         this.longitude = longitude;
     }

 }
