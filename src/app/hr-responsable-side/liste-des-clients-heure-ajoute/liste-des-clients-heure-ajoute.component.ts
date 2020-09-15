import { Component, OnInit } from '@angular/core';
import {ClientHeureAjouteService} from "../../controller/service/client-heure-ajoute.service";
import {ClientHeureAjoute} from "../../controller/model/client-heure-ajoute.model";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {AjouterClientComponent} from "../absence-et-conge/ajouter-client/ajouter-client.component";
import {AbsenceEtCongeComponent} from "../absence-et-conge/absence-et-conge.component";
import {AjouterDesDespencesGainsComponent} from "../ajouter-des-despences/ajouter-des-despences-gains.component";
import {AjoutUnClientsHeureAjouteComponent} from "../ajout-un-clients-heure-ajoute/ajout-un-clients-heure-ajoute.component";

@Component({
  selector: 'app-liste-des-clients-heure-ajoute',
  templateUrl: './liste-des-clients-heure-ajoute.component.html',
  styleUrls: ['./liste-des-clients-heure-ajoute.component.css']
})
export class ListeDesClientsHeureAjouteComponent implements OnInit {

  constructor(private clientHeureAjouteService: ClientHeureAjouteService,
              private dialog: MatDialog) { }
cols: any;
  get client(): Array<ClientHeureAjoute> {
    return this.clientHeureAjouteService.clients;
  }
  findMoisAvant(){
    this.clientHeureAjouteService.findDayPrevious();
  }
  findMoisApres(){
    this.clientHeureAjouteService.findDayNext();
  }
  chercherParDate(){
    this.clientHeureAjouteService.findBydate(this.date);
  }
  date: Date;
  ngOnInit(): void {
    this.clientHeureAjouteService.findAujourdHui();
    this.cols = [
      { field: 'nomFR', header: 'Nom FR' },
      { field: 'nomAR', header: 'Nom AR' },
      { field: 'prenomFR', header: 'prenom FR' },
      { field: 'prenomAR', header: 'prenom AR' },
      { field: 'addresseFR', header: 'adresse FR' },
      { field: 'adresseAR', header: 'adresse AR' },
      { field: 'cin', header: 'Cin' },
    ];
  }
  public ajouterUnClient() {
    this.clientHeureAjouteService.genererCodeClient();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '95%';
    dialogConfig.height = '95%';
    this.dialog.open(AjoutUnClientsHeureAjouteComponent,
      dialogConfig);
  }
  public modifierUnClient(cli: ClientHeureAjoute) {
    this.clientHeureAjouteService.modiferCeClient(cli);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '95%';
    dialogConfig.height = '95%';
    this.dialog.open(AjoutUnClientsHeureAjouteComponent,
      dialogConfig);
  }
  public InfoClient(cli: ClientHeureAjoute){
  //  this.clientService.copierClientInfo(cli);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '100%';
    dialogConfig.height = '95%';
   /* this.dialog.open(AbsenceEtCongeComponent,
      dialogConfig);*/
  }
}
