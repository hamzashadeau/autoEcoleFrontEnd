import { Component, OnInit } from '@angular/core';
import {EmployeServiceService} from "../../controller/service/employe-service.service";
import {Employe} from "../../controller/model/employe.model";
import {ClientHeureAjouteService} from "../../controller/service/client-heure-ajoute.service";
import {ClientHeureAjoute} from "../../controller/model/client-heure-ajoute.model";

@Component({
  selector: 'app-ajout-un-clients-heure-ajoute',
  templateUrl: './ajout-un-clients-heure-ajoute.component.html',
  styleUrls: ['./ajout-un-clients-heure-ajoute.component.css']
})
export class AjoutUnClientsHeureAjouteComponent implements OnInit {

  constructor(private clientHeureAjouteService: ClientHeureAjouteService) { }
  get clientAjout(): ClientHeureAjoute {
    return this.clientHeureAjouteService.clientAjout;
  }
  categorie: string;
  ajouterUnClient() {
    if(this.clientAjout.id === null){
      this.clientHeureAjouteService.save();
    } else{
      this.clientHeureAjouteService.edit(this.clientAjout);
    }
  }

  ngOnInit(): void {
  }
}
