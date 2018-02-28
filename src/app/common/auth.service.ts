import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router, CanActivate,ActivatedRouteSnapshot } from '@angular/router';

import { AppConfiguration } from '../common/config/app-configuration.service';
import { AppDataService } from '../common/app-data.service';

@Injectable()
export class AuthService implements CanActivate {


    constructor(public router: Router, public appData: AppDataService) { 
    }

    public get accessToken(): string {
        return this.appData.accessToken;
    }

    public set accessToken(accessToken: string) {
        this.appData.accessToken = accessToken;
    }

    public get rol(): string {
        return this.appData.rol;
    }

    public set rol(rol: string) {
        this.appData.rol = rol;
    }

    public isLoggedIn(): boolean {
        return this.appData.accessToken != null && this.appData.accessToken !== undefined;
    }

    public signOut() {
        this.appData.removeAccessToken();
        this.router.navigate(['']);
    }

    public canActivate(route: ActivatedRouteSnapshot) {
        const expectedRole = route.data.expectedRole;
        var tokenPayload = this.appData.rol;
        
        if (!this.isLoggedIn() ||  expectedRole.indexOf(tokenPayload) === -1 ) {
            this.router.navigate(['']);
            return false;
        }
        return true;
    }
}

