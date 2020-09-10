import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Route, Router} from '@angular/router';
import { fournisseur } from '../model/fournisseur.model';
import { reserver } from '../model/reserver.model';
import { client } from '../model/client.model';

@Injectable({
  providedIn: 'root'
})
export class clientService {
  private _client: Array<client>;
  private _clientSearch: client;
  private _clientFound: client;
  private _clientAjout: client;
  private  options = {
    headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
};
  constructor(private http: HttpClient,
              private router: Router,
              ) { }
 url = 'http://localhost/confer/Admin/';
 
  get client(): Array<client> {
    if(this._client == new Array<client>() ==  null){
      this._client = new Array<client>();
      this._client.forEach(cli =>{
        cli = new client();
      })
    }
    return this._client;
  }

  set client(value: Array<client>) {
    this._client = value;
  }

  public findAll() {
    this.http.get<Array<client>>(this.url + 'findAllClients').subscribe(
      data => {
        if (data != null) {
          this.client = data;
          console.log('ha data' + data);
        }
      }, eror => {
        console.log('eroro');
      });
  }
  public ajouterUnclient() {
    this.http.post<number>(this.url +'createClient', this.clientAjout, this.options).subscribe(
      data => {
        if (data == 1) {
          console.log('ha data' + data);
        }
      }, eror => {
        console.log('eroro');
      });
  }
  public chercherUnclientParCode(code :string){
    console.log('ha code '+ code);
    this.http.get<Array<client>>(this.url+'findClientsByCode/'+ code).subscribe(
      data => {
        if (data != null ) {
          this.client = data;
          console.log('ha data' + data);
        }
      }, eror => {
        console.log('eroro');
      });
  }
  public chercherUnclientParNomDeEntrprise(nom: string){
    this.http.get<Array<client>>(this.url+'findClientsByName/'+ nom).subscribe(
      data => {
        if (data != null ) {
          this.client = data;
          console.log('ha data' + data);
        }
      }, eror => {
        console.log('eroro');
      });
  }

  get clientSearch(): client {
    if(this._clientSearch == null){
      this._clientSearch = new client();
    }
    return this._clientSearch;
  }

  set clientSearch(value: client) {
    this._clientSearch = value;
  }

  get clientFound(): client {
    if(this._clientFound == null){
      this._clientFound = new client();
    }
    return this._clientFound;
  }

  set clientFound(value: client) {
    this._clientFound = value;
  }
  get clientAjout(): client {
    if(this._clientAjout == null){
      this._clientAjout = new client();
    }
    return this._clientAjout;
  }

  set clientAjout(value: client) {
    this._clientAjout = value;
  }
}
