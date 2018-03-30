import { Injectable } from '@angular/core';


@Injectable()
export class Roles {

     private rolid: Number;
     private name:string;


     constructor(rolid:Number, name: string) {
         this.rolid = rolid;
         this.name = name;
     }

 }
