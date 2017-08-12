import { Component, OnInit } from '@angular/core';
import { Client } from '../../models/Client';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { FlashMessagesService } from 'ngx-flash-messages';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {
  id:string;
  client:Client;
  hasBalance:boolean = false;
  showBalanceInput:boolean = false;

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
      console.log(client);
    });
  }

}
