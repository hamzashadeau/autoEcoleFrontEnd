import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EtatFinanciere} from '../model/etat-financiere.model';
import {Employe} from '../model/employe.model';
import {client} from '../model/client.model';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class EtatFinanciereService {

  constructor(private http: HttpClient,
              private toast: ToastrService) { }
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

  get totalGains(): number {
    return this._totalGains;
  }

  set totalGains(value: number) {
    this._totalGains = value;
  }

  get totaldespence(): number {
    return this._totaldespence;
  }

  set totaldespence(value: number) {
    this._totaldespence = value;
  }

  get nombreGains1(): number {
    return this._nombreGains1;
  }

  set nombreGains1(value: number) {
    this._nombreGains1 = value;
  }

  get nombreGains2(): number {
    return this._nombreGains2;
  }

  set nombreGains2(value: number) {
    this._nombreGains2 = value;
  }

  get nombreGains3(): number {
    return this._nombreGains3;
  }

  set nombreGains3(value: number) {
    this._nombreGains3 = value;
  }

  get nombreGains4(): number {
    return this._nombreGains3;
  }

  set nombreGains4(value: number) {
    this._nombreGains4 = value;
  }

  get nombreGains5(): number {
    return this._nombreGains5;
  }

  set nombreGains5(value: number) {
    this._nombreGains5 = value;
  }

  get nombreGains6(): number {
    return this._nombreGains6;
  }

  set nombreGains6(value: number) {
    this._nombreGains6 = value;
  }

  get nombreGains7(): number {
    return this._nombreGains7;
  }

  set nombreGains7(value: number) {
    this._nombreGains7 = value;
  }

  get nombreGains8(): number {
    return this._nombreGains8;
  }

  set nombreGains8(value: number) {
    this._nombreGains8 = value;
  }

  get nombreGains9(): number {
    return this._nombreGains9;
  }

  set nombreGains9(value: number) {
    this._nombreGains9 = value;
  }

  get nombreGains10(): number {
    return this._nombreGains10;
  }

  set nombreGains10(value: number) {
    this._nombreGains10 = value;
  }

  get nombreGains11(): number {
    return this._nombreGains11;
  }

  set nombreGains11(value: number) {
    this._nombreGains11 = value;
  }

  get nombreGains12(): number {
    return this._nombreGains12;
  }

  set nombreGains12(value: number) {
    this._nombreGains12 = value;
  }

  get nombreDespence1(): number {
    return this._nombreDespence1;
  }

  set nombreDespence1(value: number) {
    this._nombreDespence1 = value;
  }

  get nombreDespence2(): number {
    return this._nombreDespence2;
  }

  set nombreDespence2(value: number) {
    this._nombreDespence2 = value;
  }

  get nombreDespence3(): number {
    return this._nombreDespence3;
  }

  set nombreDespence3(value: number) {
    this._nombreDespence3 = value;
  }

  get nombreDespence4(): number {
    return this._nombreDespence4;
  }

  set nombreDespence4(value: number) {
    this._nombreDespence4 = value;
  }

  get nombreDespence5(): number {
    return this._nombreDespence5;
  }

  set nombreDespence5(value: number) {
    this._nombreDespence5 = value;
  }

  get nombreDespence6(): number {
    return this._nombreDespence6;
  }

  set nombreDespence6(value: number) {
    this._nombreDespence6 = value;
  }

  get nombreDespence7(): number {
    return this._nombreDespence7;
  }

  set nombreDespence7(value: number) {
    this._nombreDespence7 = value;
  }

  get nombreDespence8(): number {
    return this._nombreDespence8;
  }

  set nombreDespence8(value: number) {
    this._nombreDespence8 = value;
  }

  get nombreDespence9(): number {
    return this._nombreDespence9;
  }

  set nombreDespence9(value: number) {
    this._nombreDespence9 = value;
  }

  get nombreDespence10(): number {
    return this._nombreDespence10;
  }

  set nombreDespence10(value: number) {
    this._nombreDespence10 = value;
  }

  get nombreDespence11(): number {
    return this._nombreDespence11;
  }

  set nombreDespence11(value: number) {
    this._nombreDespence11 = value;
  }

  get nombreDespence12(): number {
    return this._nombreDespence12;
  }

  set nombreDespence12(value: number) {
    this._nombreDespence12 = value;
  }
  private _listesDesDepenses: Array<EtatFinanciere>;
  private _listesDesGains: Array<EtatFinanciere>;
  private _etatAjout: EtatFinanciere;
mois: number;
  private _totalGains: number;
private _totaldespence: number;
  // nobmre de gains par mois statistique
private _nombreGains1: number;
  private _nombreGains2: number;
  private _nombreGains3: number;
  private _nombreGains4: number;
  private _nombreGains5: number;

  private _nombreGains6: number;

  private _nombreGains7: number;
  private _nombreGains8: number;

  private _nombreGains9: number;

  private _nombreGains10: number;

  private _nombreGains11: number;

  private _nombreGains12: number;
  // nombre de despences par mois
private _nombreDespence1: number;

  private _nombreDespence2: number;

  private _nombreDespence3: number;


  private _nombreDespence4: number;

  private _nombreDespence5: number;

  private _nombreDespence6: number;

  private _nombreDespence7: number;

  private _nombreDespence8: number;

  private _nombreDespence9: number;

  private _nombreDespence10: number;

  private _nombreDespence11: number;

  private _nombreDespence12: number;
public ajouterdespences() {
  this.etatAjout.type = 'despenses';
}
public save() {
  this.http.post<number>('http://localhost:8080/autoEcole-Api/EtatFinanciere/save' , this.etatAjout).subscribe(
    data => {
      if (data != null ) {
        if (this.etatAjout.type === 'gains') {
          this.toast.success(`gains est bien sauvgarder`, 'gains sauvgarder', {
            timeOut: 2500,
            progressBar: true,
            progressAnimation: 'increasing',
            positionClass: 'toast-top-right'
          });
        } else {
          this.toast.success(`despense est bien sauvgarder`, 'despense sauvgarder', {
            timeOut: 2500,
            progressBar: true,
            progressAnimation: 'increasing',
            positionClass: 'toast-top-right'
          });
        }
        this.mois = (new Date().getMonth() + 1);
        this.findAllDepensesParMois(this.mois);
        this.findAllGainsParMois(this.mois);
        console.log('ha data' + data);
        this.etatAjout = null;
      }
    }, eror => {
      console.log('eroro');
    });

}
  public ajoutergains() {
    this.etatAjout.type = 'gains';
  }

  public  findAllGainsParMois(mois: number) {
  this.totalGains = 0.0,
    this.http.get<Array<EtatFinanciere>>('http://localhost:8080/autoEcole-Api/EtatFinanciere/findAllGainsByTypeAndmois/' + mois).subscribe(
      data => {
        this.listesDesGains = data;
        this.listesDesGains.forEach(liste => {
          this.totalGains = this.totalGains + liste.monant;
        });
        console.log('sucess');
      }, eror => {
        console.log('eroro');
      });
  }

  public  findAllDepensesParMois(mois: number) {
  this.totaldespence = 0.0;
    this.http.get<Array<EtatFinanciere>>('http://localhost:8080/autoEcole-Api/EtatFinanciere/findAllDespensesByTypeAndmois/' + mois).subscribe(
      data => {
        this.listesDesDepenses = data;
        this.listesDesDepenses.forEach(liste => {
          this.totaldespence = this.totaldespence + liste.monant;
        });
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
  this.totalGains = 0.0;
    this.http.get<Array<EtatFinanciere>>('http://localhost:8080/autoEcole-Api/EtatFinanciere/findAllGainsByTypeAndmoisAndAnnee/mois/' + mois + '/annee/' + annee).subscribe(
      data => {
        this.listesDesGains = data;
        this.listesDesGains.forEach(liste =>{
          this.totalGains = this.totalGains + liste.monant;
        })
        console.log('sucess');
      }, eror => {
        console.log('eroro');
      });
  }
  public  deleteById(id: number) {
    this.http.delete<number>('http://localhost:8080/autoEcole-Api/EtatFinanciere/deleteById/' + id).subscribe(
      data => {
        this.mois = (new Date().getMonth() + 1);
        this.findAllDepensesParMois(this.mois);
        this.findAllGainsParMois(this.mois);
        console.log('sucess');
      }, eror => {
        console.log('eroro');
      });
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

  public  findAllGainsParMois2AndAnnee(mois: number, annee: number) {
    this.http.get<Array<EtatFinanciere>>('http://localhost:8080/autoEcole-Api/EtatFinanciere/findAllGainsByTypeAndmoisAndAnnee/mois/' + mois + '/annee/' + annee).subscribe(
      data => {
        this._nombreGains2 = data.length;
        console.log('sucess');
      }, eror => {
        console.log('eroro');
      });
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

  public  findAllGainsParMois4AndAnnee(mois: number, annee: number) {
    this.http.get<Array<EtatFinanciere>>('http://localhost:8080/autoEcole-Api/EtatFinanciere/findAllGainsByTypeAndmoisAndAnnee/mois/' + mois + '/annee/' + annee).subscribe(
      data => {
        this._nombreGains4 = data.length;
        console.log('sucess');
      }, eror => {
        console.log('eroro');
      });
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

  public  findAllGainsParMois6AndAnnee(mois: number, annee: number) {
    this.http.get<Array<EtatFinanciere>>('http://localhost:8080/autoEcole-Api/EtatFinanciere/findAllGainsByTypeAndmoisAndAnnee/mois/' + mois + '/annee/' + annee).subscribe(
      data => {
        this._nombreGains6 = data.length;
        console.log('sucess');
      }, eror => {
        console.log('eroro');
      });
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

  public  findAllGainsParMois8AndAnnee(mois: number, annee: number) {
    this.http.get<Array<EtatFinanciere>>('http://localhost:8080/autoEcole-Api/EtatFinanciere/findAllGainsByTypeAndmoisAndAnnee/mois/' + mois + '/annee/' + annee).subscribe(
      data => {
        this._nombreGains8 = data.length;
        console.log('sucess');
      }, eror => {
        console.log('eroro');
      });
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

  public  findAllGainsParMois10AndAnnee(mois: number, annee: number) {
    this.http.get<Array<EtatFinanciere>>('http://localhost:8080/autoEcole-Api/EtatFinanciere/findAllGainsByTypeAndmoisAndAnnee/mois/' + mois + '/annee/' + annee).subscribe(
      data => {
        this._nombreGains10 = data.length;
        console.log('sucess');
      }, eror => {
        console.log('eroro');
      });
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
  this.totaldespence = 0.0;
    this.http.get<Array<EtatFinanciere>>('http://localhost:8080/autoEcole-Api/EtatFinanciere/findAllDespensesByTypeAndmoisAndAnnee/mois/' + mois + '/annee/' + annee).subscribe(
      data => {
        this.listesDesDepenses = data;
        this.listesDesDepenses.forEach(liste => {
          this.totaldespence = this.totaldespence + liste.monant;
        });
        console.log('sucess');
      }, eror => {
        console.log('eroro');
      });
    return this._nombreDespence1;
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
