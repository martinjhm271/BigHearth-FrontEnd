import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './common/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'app';

  constructor(
      public authService: AuthService,
      public router: Router
    ) {
      if (!this.authService.isLoggedIn()) {
        this.router.navigate(['/']);
      }
    }

    isLoggedIn() {
      return this.authService.isLoggedIn();
    }

    isRol(roles: string):boolean{
      if(roles.length === 3){
        return true;
      }else{

        return roles.indexOf(this.authService.rol) >= 0;
      }
       
    }

    signOut() {
      this.authService.signOut();
    }


}
