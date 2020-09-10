import { Component, OnInit } from '@angular/core';
import { client } from 'src/app/controller/model/client.model';
import { clientService } from 'src/app/controller/service/client.service';

@Component({
  selector: 'app-ajouter-client',
  templateUrl: './ajouter-client.component.html',
  styleUrls: ['./ajouter-client.component.css']
})
export class AjouterClientComponent implements OnInit {

  constructor(private clientService: clientService) { }

  ngOnInit(): void {
    this.categorie = "client";
  }
categorie: string;
public ajouterUnclient(){
  this.clientService.ajouterUnclient();
}
get clientAjout(): client {
  return this.clientService.clientAjout;
}
}
