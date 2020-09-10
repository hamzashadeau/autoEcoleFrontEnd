import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Route, Router} from '@angular/router';
import { fournisseur } from '../model/fournisseur.model';
import { reserver } from '../model/reserver.model';
import { client } from '../model/client.model';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {
  private _fournisseur: Array<fournisseur>;
  private _fournisseurSearch: fournisseur;
  private _fournisseurFound: Array<fournisseur>;
  private _fournisseurAjout: fournisseur;
  constructor(private http: HttpClient,
              private router: Router) { }

url = 'http://localhost/confer/Admin/';
  public findAll() {
    this.http.get<Array<fournisseur>>(this.url+'findAllFournisseur').subscribe(
      data => {
        if (data != null) {
          console.log('this is data '+ data);
          this.fournisseur = data;
          console.log('ha fournisseur'+ this._fournisseur);
          this._fournisseur.forEach(forni =>{
            console.log(forni.ADR_FRS);  
            console.log(forni.CATEGORIE_FRS);
            console.log(forni.NOM_FRS);     
          });
          console.log('ha data' + data);
        }
      }, eror => {
        console.log('eroro');
      });
  }
  public ajouterUnFournisseur() {
    this.http.post<number>(this.url+'createFournisseur', this.fournisseurAjout).subscribe(
      data => {
        if (data == 1) {
          console.log('ha data' + data);
        }
      }, eror => {
        console.log('eroro');
      });
  }
  public chercherUnFournisseurParName(name: string){
    this.http.get<Array<fournisseur>>(this.url+'findFournisseurByName/'+ name).subscribe(
      data => {
        if (data != null ) {
          this.fournisseurFound = data;
          console.log('ha data' + data);
        }
      }, eror => {
        console.log('eroro');
      });
  }
  public chercherUnfournisseurParCategorie(categorie: string){
    this.http.get<Array<fournisseur>>(this.url+'findFournisseurByCategorie/'+ categorie).subscribe(
      data => {
        if (data != null ) {
          this.fournisseurFound = data;
          console.log('ha data' + data);
        }
      }, eror => {
        console.log('eroro');
      });
  }

  get fournisseur(): Array<fournisseur> {
    if(this._fournisseur ==  null){
      this._fournisseur = new Array<fournisseur>();
      this._fournisseur.forEach(forni =>{
        forni = new fournisseur();
      });
    return this._fournisseur;
  }
  }

  set fournisseur(value: Array<fournisseur>) {
    this._fournisseur = value;
  }

  get fournisseurSearch(): fournisseur {
    if(this._fournisseurSearch == null){
      this._fournisseurSearch = new fournisseur();
    }
    return this._fournisseurSearch;
  }

  set fournisseurSearch(value: fournisseur) {
    this._fournisseurSearch = value;
  }

  get fournisseurFound(): Array<fournisseur> {
    if(this._fournisseurFound == new Array<fournisseur>() ==  null){
      this._fournisseurFound = new Array<fournisseur>();
      this._fournisseurFound.forEach(forni =>{
        forni = new fournisseur();
      });

      return this._fournisseurFound;
  }
  }
  set fournisseurFound(value: Array<fournisseur>) {
    this._fournisseurFound = value;
  }
  get fournisseurAjout(): fournisseur {
    if(this._fournisseurAjout == null){
      this._fournisseurAjout = new fournisseur();
    }
    return this._fournisseurAjout;
  }

  set fournisseurAjout(value: fournisseur) {
    this._fournisseurAjout = value;
  }
}
