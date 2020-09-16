import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EtatFinanciere} from '../model/etat-financiere.model';
import {Employe} from '../model/employe.model';
import {client} from "../model/client.model";

@Injectable({
  providedIn: 'root'
})
export class EtatFinanciereService {

  constructor(private http: HttpClient) { }
  private _listesDesDepenses: Array<EtatFinanciere>;
  private _listesDesGains: Array<EtatFinanciere>;
  private _etatAjout: EtatFinanciere;
public ajouterdespences() {
  this.etatAjout.type = 'despenses';
}
  public ajoutergains() {
    this.etatAjout.type = 'gains';
  }
  get etatAjout(): EtatFinanciere {
    if (this._etatAjout == null) {
      this._etatAjout = new EtatFinanciere();
    }
    return this._etatAjout;
  }

  set etatAjout(value: EtatFinanciere) {
    this._etatAjout = value;
  }

  get listesDesDepenses(): Array<EtatFinanciere> {
    if (this._listesDesDepenses == null) {
      this._listesDesDepenses = new Array<EtatFinanciere>();
      this._listesDesDepenses.forEach(liste => {
        liste = new EtatFinanciere();
      });
    }
    return this._listesDesDepenses;
  }

  set listesDesDepenses(value: Array<EtatFinanciere>) {
    this._listesDesDepenses = value;
  }

  get listesDesGains(): Array<EtatFinanciere> {
    if (this._listesDesGains == null) {
      this._listesDesGains = new Array<EtatFinanciere>();
      this._listesDesGains.forEach(liste => {
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
  public  findByDate(date: Date) {
    this.http.get<Array<EtatFinanciere>>('http://localhost:8080/autoEcole-Api/EtatFinanciere/findByDate/' + date).subscribe(
      data => {
        this.listesDesDepenses = data;
        console.log('sucess');
      }, eror => {
        console.log('eroro');
      });
  }
  public  findALLdespencesBytypeAndDate(date: Date, type: string) {
    this.http.get<Array<EtatFinanciere>>('http://localhost:8080/autoEcole-Api/EtatFinanciere/findByTypeAndDate/type/' + type + '/date/' + date).subscribe(
      data => {
        this.listesDesDepenses = data;
        console.log('sucess');
      }, eror => {
        console.log('eroro');
      });
  }
  public  findALLgainssBytypeAndDate(date: Date, type: string) {
    this.http.get<Array<EtatFinanciere>>('http://localhost:8080/autoEcole-Api/EtatFinanciere/findByTypeAndDate/type/' + type + '/date/' + date).subscribe(
      data => {
        this.listesDesGains = data;
        console.log('sucess');
      }, eror => {
        console.log('eroro');
      });
  }

  public  findAllGainsParMoisAndAnnee(mois: number, annee: number) {
    this.http.get<Array<EtatFinanciere>>('http://localhost:8080/autoEcole-Api/EtatFinanciere/findAllGainsByTypeAndmoisAndAnnee/mois/' + mois + '/annee/' + annee).subscribe(
      data => {
        this.listesDesGains = data;
        console.log('sucess');
      }, eror => {
        console.log('eroro');
      });
  }

  // nobmre de gains par mois statistique
private _nombreGains1: number;

  get nombreGains1(): number {
    return this._nombreGains1;
  }

  set nombreGains1(value: number) {
    this._nombreGains1 = value;
  }

  public  findAllGainsParMois1AndAnnee(mois: number, annee: number) {
    this.http.get<Array<EtatFinanciere>>('http://localhost:8080/autoEcole-Api/EtatFinanciere/findAllGainsByTypeAndmoisAndAnnee/mois/' + mois + '/annee/' + annee).subscribe(
      data => {
        this._nombreGains1 = data.length;
        console.log('sucess');
      }, eror => {
        console.log('eroro');
      });
  }
  private _nombreGains2: number;

  get nombreGains2(): number {
    return this._nombreGains2;
  }

  set nombreGains2(value: number) {
    this._nombreGains2 = value;
  }

  public  findAllGainsParMois2AndAnnee(mois: number, annee: number) {
    this.http.get<Array<EtatFinanciere>>('http://localhost:8080/autoEcole-Api/EtatFinanciere/findAllGainsByTypeAndmoisAndAnnee/mois/' + mois + '/annee/' + annee).subscribe(
      data => {
        this._nombreGains2 = data.length;
        console.log('sucess');
      }, eror => {
        console.log('eroro');
      });
  }
  private _nombreGains3: number;

  get nombreGains3(): number {
    return this._nombreGains3;
  }

  set nombreGains3(value: number) {
    this._nombreGains3 = value;
  }

  public  findAllGainsParMois3AndAnnee(mois: number, annee: number) {
    this.http.get<Array<EtatFinanciere>>('http://localhost:8080/autoEcole-Api/EtatFinanciere/findAllGainsByTypeAndmoisAndAnnee/mois/' + mois + '/annee/' + annee).subscribe(
      data => {
        this._nombreGains3 = data.length;
        console.log('sucess');
      }, eror => {
        console.log('eroro');
      });
  }
  private _nombreGains4: number;

  get nombreGains4(): number {
    return this._nombreGains3;
  }

  set nombreGains4(value: number) {
    this._nombreGains4 = value;
  }

  public  findAllGainsParMois4AndAnnee(mois: number, annee: number) {
    this.http.get<Array<EtatFinanciere>>('http://localhost:8080/autoEcole-Api/EtatFinanciere/findAllGainsByTypeAndmoisAndAnnee/mois/' + mois + '/annee/' + annee).subscribe(
      data => {
        this._nombreGains4 = data.length;
        console.log('sucess');
      }, eror => {
        console.log('eroro');
      });
  }
  private _nombreGains5: number;

  get nombreGains5(): number {
    return this._nombreGains5;
  }

  set nombreGains5(value: number) {
    this._nombreGains5 = value;
  }

  public  findAllGainsParMois5AndAnnee(mois: number, annee: number) {
    this.http.get<Array<EtatFinanciere>>('http://localhost:8080/autoEcole-Api/EtatFinanciere/findAllGainsByTypeAndmoisAndAnnee/mois/' + mois + '/annee/' + annee).subscribe(
      data => {
        this._nombreGains5 = data.length;
        console.log('sucess');
      }, eror => {
        console.log('eroro');
      });
  }

  private _nombreGains6: number;

  get nombreGains6(): number {
    return this._nombreGains6;
  }

  set nombreGains6(value: number) {
    this._nombreGains6 = value;
  }

  public  findAllGainsParMois6AndAnnee(mois: number, annee: number) {
    this.http.get<Array<EtatFinanciere>>('http://localhost:8080/autoEcole-Api/EtatFinanciere/findAllGainsByTypeAndmoisAndAnnee/mois/' + mois + '/annee/' + annee).subscribe(
      data => {
        this._nombreGains6 = data.length;
        console.log('sucess');
      }, eror => {
        console.log('eroro');
      });
  }

  private _nombreGains7: number;

  get nombreGains7(): number {
    return this._nombreGains7;
  }

  set nombreGains7(value: number) {
    this._nombreGains7 = value;
  }

  public  findAllGainsParMois7AndAnnee(mois: number, annee: number) {
    this.http.get<Array<EtatFinanciere>>('http://localhost:8080/autoEcole-Api/EtatFinanciere/findAllGainsByTypeAndmoisAndAnnee/mois/' + mois + '/annee/' + annee).subscribe(
      data => {
        this._nombreGains7 = data.length;
        console.log('sucess');
      }, eror => {
        console.log('eroro');
      });
  }
  private _nombreGains8: number;

  get nombreGains8(): number {
    return this._nombreGains8;
  }

  set nombreGains8(value: number) {
    this._nombreGains8 = value;
  }

  public  findAllGainsParMois8AndAnnee(mois: number, annee: number) {
    this.http.get<Array<EtatFinanciere>>('http://localhost:8080/autoEcole-Api/EtatFinanciere/findAllGainsByTypeAndmoisAndAnnee/mois/' + mois + '/annee/' + annee).subscribe(
      data => {
        this._nombreGains8 = data.length;
        console.log('sucess');
      }, eror => {
        console.log('eroro');
      });
  }

  private _nombreGains9: number;

  get nombreGains9(): number {
    return this._nombreGains9;
  }

  set nombreGains9(value: number) {
    this._nombreGains9 = value;
  }

  public  findAllGainsParMois9AndAnnee(mois: number, annee: number) {
    this.http.get<Array<EtatFinanciere>>('http://localhost:8080/autoEcole-Api/EtatFinanciere/findAllGainsByTypeAndmoisAndAnnee/mois/' + mois + '/annee/' + annee).subscribe(
      data => {
        this._nombreGains9 = data.length;
        console.log('sucess');
      }, eror => {
        console.log('eroro');
      });
  }

  private _nombreGains10: number;

  get nombreGains10(): number {
    return this._nombreGains10;
  }

  set nombreGains10(value: number) {
    this._nombreGains10 = value;
  }

  public  findAllGainsParMois10AndAnnee(mois: number, annee: number) {
    this.http.get<Array<EtatFinanciere>>('http://localhost:8080/autoEcole-Api/EtatFinanciere/findAllGainsByTypeAndmoisAndAnnee/mois/' + mois + '/annee/' + annee).subscribe(
      data => {
        this._nombreGains10 = data.length;
        console.log('sucess');
      }, eror => {
        console.log('eroro');
      });
  }

  private _nombreGains11: number;

  get nombreGains11(): number {
    return this._nombreGains11;
  }

  set nombreGains11(value: number) {
    this._nombreGains11 = value;
  }

  public  findAllGainsParMois11AndAnnee(mois: number, annee: number) {
    this.http.get<Array<EtatFinanciere>>('http://localhost:8080/autoEcole-Api/EtatFinanciere/findAllGainsByTypeAndmoisAndAnnee/mois/' + mois + '/annee/' + annee).subscribe(
      data => {
        this._nombreGains11 = data.length;
        console.log('sucess');
      }, eror => {
        console.log('eroro');
      });
  }

  private _nombreGains12: number;

  get nombreGains12(): number {
    return this._nombreGains12;
  }

  set nombreGains12(value: number) {
    this._nombreGains12 = value;
  }

  public  findAllGainsParMois12AndAnnee(mois: number, annee: number) {
    this.http.get<Array<EtatFinanciere>>('http://localhost:8080/autoEcole-Api/EtatFinanciere/findAllGainsByTypeAndmoisAndAnnee/mois/' + mois + '/annee/' + annee).subscribe(
      data => {
        this._nombreGains12 = data.length;
        console.log('sucess');
      }, eror => {
        console.log('eroro');
      });
  }

  public  findAllDepensesParMoisAndAnnee(mois: number, annee: number): number {
    this.http.get<Array<EtatFinanciere>>('http://localhost:8080/autoEcole-Api/EtatFinanciere/findAllDespensesByTypeAndmoisAndAnnee/mois/' + mois + '/annee/' + annee).subscribe(
      data => {
        this.listesDesDepenses = data;
        console.log('sucess');
      }, eror => {
        console.log('eroro');
      });
    return this._nombreDespence1;
  }
  // nombre de despences par mois
private _nombreDespence1: number;

  get nombreDespence1(): number {
    return this._nombreDespence1;
  }

  set nombreDespence1(value: number) {
    this._nombreDespence1 = value;
  }

  public  findAllDepensesParMois1AndAnnee(mois: number, annee: number): number {
     this.http.get<Array<EtatFinanciere>>('http://localhost:8080/autoEcole-Api/EtatFinanciere/findAllDespensesByTypeAndmoisAndAnnee/mois/' + mois + '/annee/' + annee).subscribe(
      data => {
        this._nombreDespence1 = data.length;
        console.log('sucess');
      }, eror => {
        console.log('eroro');
      });
     return this._nombreDespence1;
  }

  private _nombreDespence2: number;

  get nombreDespence2(): number {
    return this._nombreDespence2;
  }

  set nombreDespence2(value: number) {
    this._nombreDespence2 = value;
  }

  public  findAllDepensesParMois2AndAnnee(mois: number, annee: number): number {
    this.http.get<Array<EtatFinanciere>>('http://localhost:8080/autoEcole-Api/EtatFinanciere/findAllDespensesByTypeAndmoisAndAnnee/mois/' + mois + '/annee/' + annee).subscribe(
      data => {
        this._nombreDespence2 = data.length;
        console.log('sucess');
      }, eror => {
        console.log('eroro');
      });
    return this._nombreDespence2;
  }

  private _nombreDespence3: number;

  get nombreDespence3(): number {
    return this._nombreDespence3;
  }

  set nombreDespence3(value: number) {
    this._nombreDespence3 = value;
  }

  public  findAllDepensesParMois3AndAnnee(mois: number, annee: number): number {
    this.http.get<Array<EtatFinanciere>>('http://localhost:8080/autoEcole-Api/EtatFinanciere/findAllDespensesByTypeAndmoisAndAnnee/mois/' + mois + '/annee/' + annee).subscribe(
      data => {
        this._nombreDespence3 = data.length;
        console.log('sucess');
      }, eror => {
        console.log('eroro');
      });
    return this._nombreDespence3;
  }


  private _nombreDespence4: number;

  get nombreDespence4(): number {
    return this._nombreDespence4;
  }

  set nombreDespence4(value: number) {
    this._nombreDespence4 = value;
  }

  public  findAllDepensesParMois4AndAnnee(mois: number, annee: number): number {
    this.http.get<Array<EtatFinanciere>>('http://localhost:8080/autoEcole-Api/EtatFinanciere/findAllDespensesByTypeAndmoisAndAnnee/mois/' + mois + '/annee/' + annee).subscribe(
      data => {
        this._nombreDespence4 = data.length;
        console.log('sucess');
      }, eror => {
        console.log('eroro');
      });
    return this._nombreDespence4;
  }

  private _nombreDespence5: number;

  get nombreDespence5(): number {
    return this._nombreDespence5;
  }

  set nombreDespence5(value: number) {
    this._nombreDespence5 = value;
  }

  public  findAllDepensesParMois5AndAnnee(mois: number, annee: number): number {
    this.http.get<Array<EtatFinanciere>>('http://localhost:8080/autoEcole-Api/EtatFinanciere/findAllDespensesByTypeAndmoisAndAnnee/mois/' + mois + '/annee/' + annee).subscribe(
      data => {
        this._nombreDespence5 = data.length;
        console.log('sucess');
      }, eror => {
        console.log('eroro');
      });
    return this._nombreDespence5;
  }

  private _nombreDespence6: number;

  get nombreDespence6(): number {
    return this._nombreDespence6;
  }

  set nombreDespence6(value: number) {
    this._nombreDespence6 = value;
  }

  public  findAllDepensesParMois6AndAnnee(mois: number, annee: number): number {
    this.http.get<Array<EtatFinanciere>>('http://localhost:8080/autoEcole-Api/EtatFinanciere/findAllDespensesByTypeAndmoisAndAnnee/mois/' + mois + '/annee/' + annee).subscribe(
      data => {
        this._nombreDespence6 = data.length;
        console.log('sucess');
      }, eror => {
        console.log('eroro');
      });
    return this._nombreDespence6;
  }

  private _nombreDespence7: number;

  get nombreDespence7(): number {
    return this._nombreDespence7;
  }

  set nombreDespence7(value: number) {
    this._nombreDespence7 = value;
  }

  public  findAllDepensesParMois7AndAnnee(mois: number, annee: number): number {
    this.http.get<Array<EtatFinanciere>>('http://localhost:8080/autoEcole-Api/EtatFinanciere/findAllDespensesByTypeAndmoisAndAnnee/mois/' + mois + '/annee/' + annee).subscribe(
      data => {
        this._nombreDespence7 = data.length;
        console.log('sucess');
      }, eror => {
        console.log('eroro');
      });
    return this._nombreDespence7;
  }

  private _nombreDespence8: number;

  get nombreDespence8(): number {
    return this._nombreDespence8;
  }

  set nombreDespence8(value: number) {
    this._nombreDespence8 = value;
  }

  public  findAllDepensesParMois8AndAnnee(mois: number, annee: number): number {
    this.http.get<Array<EtatFinanciere>>('http://localhost:8080/autoEcole-Api/EtatFinanciere/findAllDespensesByTypeAndmoisAndAnnee/mois/' + mois + '/annee/' + annee).subscribe(
      data => {
        this._nombreDespence8 = data.length;
        console.log('sucess');
      }, eror => {
        console.log('eroro');
      });
    return this._nombreDespence8;
  }

  private _nombreDespence9: number;

  get nombreDespence9(): number {
    return this._nombreDespence9;
  }

  set nombreDespence9(value: number) {
    this._nombreDespence9 = value;
  }

  public  findAllDepensesParMois9AndAnnee(mois: number, annee: number): number {
    this.http.get<Array<EtatFinanciere>>('http://localhost:8080/autoEcole-Api/EtatFinanciere/findAllDespensesByTypeAndmoisAndAnnee/mois/' + mois + '/annee/' + annee).subscribe(
      data => {
        this._nombreDespence9 = data.length;
        console.log('sucess');
      }, eror => {
        console.log('eroro');
      });
    return this._nombreDespence9;
  }

  private _nombreDespence10: number;

  get nombreDespence10(): number {
    return this._nombreDespence10;
  }

  set nombreDespence10(value: number) {
    this._nombreDespence10 = value;
  }

  public  findAllDepensesParMois10AndAnnee(mois: number, annee: number): number {
    this.http.get<Array<EtatFinanciere>>('http://localhost:8080/autoEcole-Api/EtatFinanciere/findAllDespensesByTypeAndmoisAndAnnee/mois/' + mois + '/annee/' + annee).subscribe(
      data => {
        this._nombreDespence10 = data.length;
        console.log('sucess');
      }, eror => {
        console.log('eroro');
      });
    return this._nombreDespence10;
  }

  private _nombreDespence11: number;

  get nombreDespence11(): number {
    return this._nombreDespence11;
  }

  set nombreDespence11(value: number) {
    this._nombreDespence11 = value;
  }

  public  findAllDepensesParMois11AndAnnee(mois: number, annee: number): number {
    this.http.get<Array<EtatFinanciere>>('http://localhost:8080/autoEcole-Api/EtatFinanciere/findAllDespensesByTypeAndmoisAndAnnee/mois/' + mois + '/annee/' + annee).subscribe(
      data => {
        this._nombreDespence11 = data.length;
        console.log('sucess');
      }, eror => {
        console.log('eroro');
      });
    return this._nombreDespence11;
  }

  private _nombreDespence12: number;

  get nombreDespence12(): number {
    return this._nombreDespence12;
  }

  set nombreDespence12(value: number) {
    this._nombreDespence12 = value;
  }

  public  findAllDepensesParMois12AndAnnee(mois: number, annee: number): number {
    this.http.get<Array<EtatFinanciere>>('http://localhost:8080/autoEcole-Api/EtatFinanciere/findAllDespensesByTypeAndmoisAndAnnee/mois/' + mois + '/annee/' + annee).subscribe(
      data => {
        this._nombreDespence12 = data.length;
        console.log('sucess');
      }, eror => {
        console.log('eroro');
      });
    return this._nombreDespence12;
  }

}
