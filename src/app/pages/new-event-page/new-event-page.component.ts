import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../common/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './new-event-page.component.html',
  styleUrls: ['./new-event-page.component.css']
})
export class NewEventPageComponent implements OnInit {

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