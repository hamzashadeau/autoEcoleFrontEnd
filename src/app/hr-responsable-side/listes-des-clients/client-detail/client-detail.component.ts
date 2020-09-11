import { Component, OnInit } from '@angular/core';
import {client} from "../../../controller/model/client.model";
import {clientService} from "../../../controller/service/client.service";
import {PaimentDeClient} from "../../../controller/model/paiment-de-client.model";

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {

  constructor(private ClientService: clientService) { }
  get clientInfo(): client {
    return this.ClientService.clientInfo;
  }
  get paimentsClient(): Array<PaimentDeClient> {
    return this.ClientService.paimentsClient;
  }
  cols: any;
  ngOnInit(): void {
    this.ClientService.findBYCinClient(this.clientInfo.cin);
    this.cols = [
      { field: 'montantTotal', header: 'montant Total'},
      { field: 'montantpaye', header: 'montant paye'},
      { field: 'montantRestantes', header: 'montant Restantes'},
      { field: 'date', header: 'date de avancement' },
    ];
  }

}
