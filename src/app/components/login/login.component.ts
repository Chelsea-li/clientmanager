import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FlashMessagesService } from 'ngx-flash-messages';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string;
  password:string;

  constructor(
      private flashMessagesService:FlashMessagesService,
      private router:Router,
      private authService:AuthService
  ) { }

  ngOnInit() {
  }
  
  onSubmit(){
    console.log(this.email, this.password);
    this.authService.login(this.email, this.password)
      .then((res) => {
        this.flashMessagesService.show("You are logged in", {classes:['alert', 'alert-success'], timeout:4000});
        this.router.navigate(['/']);
      })
      .catch((error) => {
        console.log(error);
        this.flashMessagesService.show(error.message, {classes:['alert', 'alert-danger'], timeout:4000});
        this.router.navigate(['/login']);
      })
  }
}

