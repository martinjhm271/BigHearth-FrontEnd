import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../common/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

    isLoggedIn() {
        return this.authService.isLoggedIn();
      }

      signOut() {
        this.authService.signOut();
      }


}