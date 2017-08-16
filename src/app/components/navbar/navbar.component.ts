import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FlashMessagesService } from 'ngx-flash-messages';
import { AuthService } from '../../services/auth.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean;
  loggedInuser: string;
  showRegister: boolean;

  constructor(
    private flashMessagesService:FlashMessagesService,
    private router:Router,
    private authService:AuthService
  ) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if (auth){
        this.isLoggedIn = true;
        this.loggedInuser = auth.email;
      } else {
        this.isLoggedIn = false;
      }
    });
  }

  onLogOut(){
    this.authService.logout();
    this.flashMessagesService.show('You are logged out', {classes: ['alert','alert-success'], timeout:4000});
    this.router.navigate(['/login']);
  }

}
