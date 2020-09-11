import { Component, OnInit } from '@angular/core';
import {EmployeServiceService} from '../../controller/service/employe-service.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {Employe} from '../../controller/model/employe.model';
import {AjoutFournisseurComponent} from '../gestion-personnel/ajout-fournisseur.component';
import {clientService} from '../../controller/service/client.service';
import {client} from '../../controller/model/client.model';
import {AjouterClientComponent} from "../absence-et-conge/ajouter-client/ajouter-client.component";
import {ClientDetailComponent} from "./client-detail/client-detail.component";
import {AbsenceEtCongeComponent} from "../absence-et-conge/absence-et-conge.component";

@Component({
  selector: 'app-listes-des-clients',
  templateUrl: './listes-des-clients.component.html',
  styleUrls: ['./listes-des-clients.component.css']
})
export class ListesDesClientsComponent implements OnInit {

  constructor(private employeService: EmployeServiceService,
              private clientService: clientService,
              private dialog: MatDialog) { }
  private _motif: string;

  get motif(): string {
    return this._motif;
  }

  set motif(value: string) {
    this._motif = value;
  }
  cols: any;
  ngOnInit() {
    this.clientService.findAll();
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
  get client(): Array<client> {
    return this.clientService.client;
  }
  get employes(): Array<Employe> {
    return this.employeService.employes;
  }
  public ajouterUnClient() {
    this.clientService.genererCodeClient();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '90%';
    dialogConfig.height = '100%';
    this.dialog.open(AjouterClientComponent,
      dialogConfig);
  }
  get clientAjout(): client {
    return this.clientService.clientAjout;
  }
  public InfoClient(cli: client){
    this.clientService.copierClientInfo(cli);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '90%';
    dialogConfig.height = '100%';
    this.dialog.open(AbsenceEtCongeComponent,
      dialogConfig);
  }
}
