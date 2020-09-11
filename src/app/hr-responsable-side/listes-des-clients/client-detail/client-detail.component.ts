import { Component, OnInit } from '@angular/core';
import {client} from '../../../controller/model/client.model';
import {clientService} from '../../../controller/service/client.service';
import {PaimentDeClient} from '../../../controller/model/paiment-de-client.model';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {

 ngOnInit(): void {
 }

}
