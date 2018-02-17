import{Component}from'@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from './common/auth.service';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private navForm:FormGroup;
  private searchInput:string='';
  private modalBody:string;

  constructor(private modalService: NgbModal,public authService: AuthService,public router: Router,private userService:UserService){
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/']);
    }
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  signOut() {
    this.authService.signOut();
  }

  mensaje(modal){
    this.userService.getUserByEmail(this.searchInput).subscribe(
      response => {
         this.modalBody="<div>Username: "+response.username+"</div><div>Email: "+response.email+"</div><div>Firstname: "+response.firstname+"</div><div>Lastname: "+response.lastname+"</div><div>Image: <img src='"+response.image+"' width='80' height='80' />";
      },error => {
        this.modalBody="<div> No user found with the email address </div>"
      }
    );

    this.modalService.open(modal);
  }
}
