import { Component, OnInit } from '@angular/core';
import { Client } from '../../models/Client';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { FlashMessagesService } from 'ngx-flash-messages';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {
  id:string;
  client: Client = {
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
    balance:0
  }

  disableBalanceOnEdit:boolean = true;


  constructor(
    public clientService:ClientService,
    public flashMessagesService:FlashMessagesService,
    public router:Router,
    public  route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.clientService.getClient(this.id).subscribe(client => {
      this.client = client;
    })
  }

  
  onEditClient({value, valid}:{value:Client, valid:boolean}){
    if (!valid){
      this.flashMessagesService.show('Please fill in all fields', {
      classes: ['alert', 'alert-danger'], 
      timeout: 5000, // Default is 3000
      });
      this.router.navigate(['edit-client'+ this.id]);
    } else {
      this.clientService.updateClient(this.id, value);
      this.flashMessagesService.show('Client updated!', 
      {
      classes: ['alert', 'alert-success'], 
      timeout: 5000, // Default is 3000
      });
      this.router.navigate(['/client/' + this.id]);
    }
  };

}
