import { Injectable } from '@angular/core';

@Injectable()
export class AppDataService {
private _accessToken: string | null = null;


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


  public removeAccessToken() {
    this._accessToken = null;
    localStorage.removeItem('AT');
  }
}