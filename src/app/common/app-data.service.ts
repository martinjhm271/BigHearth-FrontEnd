import { Injectable } from '@angular/core';

@Injectable()
export class AppDataService {
private _accessToken: string | null = null;
private _rol: string | null = null;
private _id: string | null = null;


constructor(){}

public set accessToken(accessToken: string) {
    this._accessToken = accessToken;
    localStorage.setItem('AT', accessToken);
  }

  public get accessToken(): string {
    if (!this._accessToken) {
      this._accessToken = localStorage.getItem('AT');
    }
    return this._accessToken;
  }

  public set rol(rol: string) {
    this._rol = rol;
    localStorage.setItem('RL', rol);
  }

  public get rol(): string {
    if (!this._rol) {
      this._rol = localStorage.getItem('RL');
    }
    return this._rol;
  }

  public set id(id: string) {
    this._id = id;
    localStorage.setItem('id', id);
  }

  public get id(): string {
    if (!this._id) {
      this._id = localStorage.getItem('id');
    }
    return this._id;
  }


  public removeAccessToken() {
    this._accessToken = null;
    localStorage.removeItem('AT');
  }

  public removerol() {
    this._rol = null;
    localStorage.removeItem('RL');
  }
}