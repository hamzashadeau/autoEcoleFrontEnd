import { Component, OnInit } from '@angular/core';
import {EtatFinanciereService} from "../../controller/service/etat-financiere.service";
import {EtatFinanciere} from "../../controller/model/etat-financiere.model";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {AjoutFournisseurComponent} from "../gestion-personnel/ajout-fournisseur.component";
import {AjouterDesDespencesGainsComponent} from "../ajouter-des-despences/ajouter-des-despences-gains.component";

@Component({
  selector: 'app-listes-des-depenses',
  templateUrl: './listes-des-depenses.component.html',
  styleUrls: ['./listes-des-depenses.component.css']
})
export class ListesDesDepensesComponent implements OnInit {

  constructor(private etatFinancierService: EtatFinanciereService,
              private dialog: MatDialog) { }
mois: number;
  cols: any;
  ngOnInit(): void {
    this.mois = (new Date().getMonth() + 1);
    this.etatFinancierService.findAllDepensesParMois(this.mois);
    this.cols = [
      { field: 'nom', header: 'Nom' },
      { field: 'monant', header: 'Montant' },
      { field: 'date', header: 'date' },
    ];
  }
  findMoisAvant(){
    this.mois = this.mois -1;
    this.etatFinancierService.findAllDepensesParMois(this.mois);
  }
  findMoisApres(){
    this.mois = this.mois + 1;
    this.etatFinancierService.findAllDepensesParMois(this.mois);
  }
  get listesDesDepenses(): Array<EtatFinanciere> {
    return this.etatFinancierService.listesDesDepenses;
  }
  public tabindex;
  public demo1TabIndex = 0;
  public demo1BtnClick(value: number) {
    this.demo1TabIndex = value ;
  }
  public ajouterUnDespences(){
    this.etatFinancierService.ajouterdespences();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '90%';
    dialogConfig.height = '100%';
    this.dialog.open(AjouterDesDespencesGainsComponent,
      dialogConfig);
  }
}
