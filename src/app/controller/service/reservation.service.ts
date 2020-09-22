import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Route, Router} from '@angular/router';
import { fournisseur } from '../model/fournisseur.model';
import { reserver } from '../model/reserver.model';
import {environment} from "../../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class reservationService {
  url = 'http://localhost/confer/Admin/';
  urlprod = environment.Url + 'autoEcole-Api/historiqueApplication/findAll';

  private _reservation: Array<reserver>;
  private _reservationSearch: reserver;
  private _reservationFound: Array<reserver>;
  private _reserverAjout: reserver;
  private  options = {
    headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
};
  constructor(private http: HttpClient,
              private router: Router) { }


  public findAll() {
    this.http.get<Array<reserver>>(this.url + 'findAllReserver').subscribe(
      data => {
        if (data != null) {
          this.reservation = data;
          console.log('ha data' + data);
        }
      }, eror => {
        console.log('eroro');
      });
  }
  public ajouterUneResrvation() {
    console.log('ha new todo ' + this.reserverAjout.START);
    console.log('ha new todo ' + this.reserverAjout.END);
     this.http.post<any>('http://localhost/confer/Admin/createReservation',this.reserverAjout,this.options).subscribe(
      data => {
        if (data != null) {
          console.log('ha data' + data);
        }
      }, eror => {
        console.log('eroro');
      });
  }
  public findByDate(){
      this.http.get<Array<reserver>>(this.url+'findByDate/'+ this.reservationSearch.START+'/'+ this.reservationSearch.END).subscribe(
      data => {
        if (data != null ) {
          console.log('resultat: '+ data);
          this.reservationFound = data;
          this.reservation =this.reservationFound;
          console.log('ha data' + data);
        }
      }, eror => {
        console.log('eroro');
      });
  }
  get reservation(): Array<reserver> {
    if(this._reservation == null){
      this._reservation = new Array<reserver>();
      this._reservation.forEach( res => {
        res = new reserver();
      });
    }
    return this._reservation;
  }

  set reservation(value: Array<reserver>) {
    this._reservation = value;
  }
  get reserverAjout(): reserver {
    if(this._reserverAjout == null){
      this._reserverAjout = new reserver();
    }
    return this._reserverAjout;
  }

  set reserverAjout(value: reserver) {
    this._reserverAjout = value;
  }
  get reservationSearch(): reserver {
    if(this._reservationSearch == null){
      this._reservationSearch = new reserver();
    }
    return this._reservationSearch;
  }

  set reservationSearch(value: reserver) {
    this._reservationSearch = value;
  }

  get reservationFound(): Array<reserver> {
    if(this._reservationFound == null){
      this._reservationFound = new Array<reserver>();
      this._reservationFound.forEach( res => {
        res = new reserver();
      });
    }
    return this._reservationFound;
  }

  set reservationFound(value: Array<reserver>) {
    this._reservationFound = value;
  }
}

