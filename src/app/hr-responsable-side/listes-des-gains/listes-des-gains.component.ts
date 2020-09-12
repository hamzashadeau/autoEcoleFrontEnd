import { Component, OnInit } from '@angular/core';
import {EtatFinanciereService} from "../../controller/service/etat-financiere.service";
import {EtatFinanciere} from "../../controller/model/etat-financiere.model";

@Component({
  selector: 'app-listes-des-gains',
  templateUrl: './listes-des-gains.component.html',
  styleUrls: ['./listes-des-gains.component.css']
})
export class ListesDesGainsComponent implements OnInit {

  constructor(private etatFinancierService: EtatFinanciereService) { }
  mois: number;
  cols: any;
  ngOnInit(): void {
    this.mois = (new Date().getMonth() + 1);
    this.etatFinancierService.findAllGainsParMois(this.mois);
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
  get listesDesGains(): Array<EtatFinanciere> {
    return this.etatFinancierService.listesDesGains;
  }


}
