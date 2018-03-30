import { Injectable } from '@angular/core';
import { EventId } from './Roles';

@Injectable()
export class RolUser {

     private mail: string;
     private rol_id:Roles;


     constructor(mail:string, rol_id: Roles) {
         this.mail = mail;
         this.rol_id = rol_id;
     }

 }