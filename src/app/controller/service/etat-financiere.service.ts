import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EtatFinanciere} from "../model/etat-financiere.model";
import {Employe} from "../model/employe.model";

@Injectable({
  providedIn: 'root'
})
export class EtatFinanciereService {

  constructor(private http: HttpClient) { }
  private _listesDesDepenses: Array<EtatFinanciere>;
  private _listesDesGains: Array<EtatFinanciere>;
  private _etatAjout: EtatFinanciere;
public ajouterdespences(){
  this.etatAjout.type = 'despenses';
}
  public ajoutergains(){
    this.etatAjout.type = 'gains';
  }
  get etatAjout(): EtatFinanciere {
    if(this._etatAjout == null){
      this._etatAjout = new EtatFinanciere();
    }
    return this._etatAjout;
  }

  set etatAjout(value: EtatFinanciere) {
    this._etatAjout = value;
  }

  get listesDesDepenses(): Array<EtatFinanciere> {
    if (this._listesDesDepenses == null){
      this._listesDesDepenses = new Array<EtatFinanciere>();
      this._listesDesDepenses.forEach(liste =>{
        liste = new EtatFinanciere();
      });
    }
    return this._listesDesDepenses;
  }

  set listesDesDepenses(value: Array<EtatFinanciere>) {
    this._listesDesDepenses = value;
  }

  get listesDesGains(): Array<EtatFinanciere> {
    if (this._listesDesGains == null){
      this._listesDesGains = new Array<EtatFinanciere>();
      this._listesDesGains.forEach(liste =>{
        liste = new EtatFinanciere();
      });
   }
    return this._listesDesGains;
  }

  set listesDesGains(value: Array<EtatFinanciere>) {
    this._listesDesGains = value;
  }
  public  findAllGainsParMois(mois: number) {
    this.http.get<Array<EtatFinanciere>>('http://localhost:8080/autoEcole-Api/EtatFinanciere/findAllGainsByTypeAndmois/' + mois).subscribe(
      data => {
        this.listesDesGains = data;
        console.log('sucess');
      }, eror => {
        console.log('eroro');
      });
  }
  public  findAllDepensesParMois(mois: number) {
    this.http.get<Array<EtatFinanciere>>('http://localhost:8080/autoEcole-Api/EtatFinanciere/findAllDespensesByTypeAndmois/' + mois).subscribe(
      data => {
        this.listesDesDepenses = data;
        console.log('sucess');
      }, eror => {
        console.log('eroro');
      });
  }
}
