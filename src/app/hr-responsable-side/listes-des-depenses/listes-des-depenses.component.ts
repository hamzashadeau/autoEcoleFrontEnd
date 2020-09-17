import { Component, OnInit } from '@angular/core';
import {EtatFinanciereService} from "../../controller/service/etat-financiere.service";
import {EtatFinanciere} from "../../controller/model/etat-financiere.model";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {AjoutFournisseurComponent} from "../gestion-personnel/ajout-fournisseur.component";
import {AjouterDesDespencesGainsComponent} from "../ajouter-des-despences/ajouter-des-despences-gains.component";
import {ConfirmationService} from "primeng";

@Component({
  selector: 'app-listes-des-depenses',
  templateUrl: './listes-des-depenses.component.html',
  styleUrls: ['./listes-des-depenses.component.css'],
  providers: [ConfirmationService]

})
export class ListesDesDepensesComponent implements OnInit {

  constructor(private etatFinancierService: EtatFinanciereService,
              private dialog: MatDialog,
              private confirmationService: ConfirmationService) { }
mois: number;
  cols: any;
  date: Date;
  year: number;
  chercherParDate(){
    this.etatFinancierService.findALLdespencesBytypeAndDate(this.date, 'despenses');
  }
  ngOnInit(): void {
    this.year = (new Date().getFullYear());
    this.mois = (new Date().getMonth() + 1);
    this.etatFinancierService.findAllDepensesParMois(this.mois);
    this.cols = [
      { field: 'nom', header: 'Nom' },
      { field: 'monant', header: 'Montant' },
      { field: 'date', header: 'date' },
    ];
  }
  get totaldespence(): number {
    return this.etatFinancierService.totaldespence;
  }
  findMoisAvant(){
    this.mois = this.mois -1;
    this.etatFinancierService.findAllDepensesParMoisAndAnnee(this.mois, this.year);
  }
  findMoisApres(){
    this.mois = this.mois + 1;
    this.etatFinancierService.findAllDepensesParMoisAndAnnee(this.mois, this.year);
  }
  findyearAvant(){
    this.year = this.year -1;
    this.etatFinancierService.findAllDepensesParMoisAndAnnee(this.mois, this.year);
  }
  findYearApres(){
    this.year = this.year + 1;
    this.etatFinancierService.findAllDepensesParMoisAndAnnee(this.mois, this.year);
  }
  get listesDesDepenses(): Array<EtatFinanciere> {
    return this.etatFinancierService.listesDesDepenses;
  }
  public tabindex;
  public demo1TabIndex = 0;
  public demo1BtnClick(value: number) {
    this.demo1TabIndex = value ;
  }
  public confirm(id: number) {
    console.log(id);
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.etatFinancierService.deleteById(id);
      },
      reject: () => {
      }
    });
  }

  public ajouterUnDespences(){
    this.etatFinancierService.ajouterdespences();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    dialogConfig.height = '50%';
    this.dialog.open(AjouterDesDespencesGainsComponent,
      dialogConfig);
  }
}
