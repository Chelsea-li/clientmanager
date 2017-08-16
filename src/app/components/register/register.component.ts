import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FlashMessagesService } from 'ngx-flash-messages';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: string;
  password: string;

  constructor(
      private flashMessagesService:FlashMessagesService,
      private router:Router,
      private authService:AuthService
  ) { }

  ngOnInit() {
  }

  onSubmit(){
    this.authService.signup(this.email, this.password)
    .then((res) => {
        this.flashMessagesService.show("New user registered", {classes:['alert', 'alert-success'], timeout:4000});
        this.router.navigate(['/']);
      })
      .catch((error) => {
        console.log(error);
        this.flashMessagesService.show(error.message, {classes:['alert', 'alert-danger'], timeout:4000});
        this.router.navigate(['/register']);
      })
  }
}
