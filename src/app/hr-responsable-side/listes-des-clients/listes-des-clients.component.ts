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
import {ConfirmationService} from "primeng";

@Component({
  selector: 'app-listes-des-clients',
  templateUrl: './listes-des-clients.component.html',
  styleUrls: ['./listes-des-clients.component.css'],
  providers: [ConfirmationService]
})
export class ListesDesClientsComponent implements OnInit {

  constructor(private employeService: EmployeServiceService,
              private clientService: clientService,
              private dialog: MatDialog,
              private confirmationService: ConfirmationService) { }
  private _motif: string;

  get motif(): string {
    return this._motif;
  }

  set motif(value: string) {
    this._motif = value;
  }
  public confirm(id: number) {
    console.log(id);
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.clientService.deleteById(id);
      },
      reject: () => {
      }
    });
  }
  cols: any;
  ngOnInit() {
    this.clientService.findAll();
    this.cols = [
      { field: 'nomFR', header: 'Nom FR' },
      { field: 'nomAR', header: 'Nom AR' },
      { field: 'prenomFR', header: 'Prenom FR' },
      { field: 'prenomAR', header: 'Prenom AR' },
      { field: 'addresseFR', header: 'Adresse FR' },
      { field: 'adresseAR', header: 'Adresse AR' },
      { field: 'cin', header: 'CIN' },
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
    dialogConfig.width = '95%';
    dialogConfig.height = '100%';
    this.dialog.open(AjouterClientComponent,
      dialogConfig);
  }
  public modifierUnClient(cli: client) {
    this.clientService.modiferCeClient(cli);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '95%';
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
    dialogConfig.width = '100%';
    dialogConfig.height = '95%';
    this.dialog.open(AbsenceEtCongeComponent,
      dialogConfig);
  }
  public tabindex;
  public demo1TabIndex = 0;
  public demo1BtnClick(value: number) {
    this.demo1TabIndex = value ;
  }
}
