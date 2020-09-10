import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Route, Router} from '@angular/router';
import { fournisseur } from '../model/fournisseur.model';
import { reserver } from '../model/reserver.model';

@Injectable({
  providedIn: 'root'
})
export class LogInService {
  url = 'http://localhost/confer/Admin/';

private _fournisseur: Array<fournisseur>;
  constructor(private http: HttpClient,
              private router: Router) { }
              get fournisseur (): Array<fournisseur> {
                if(this._fournisseur == null){
                  this._fournisseur =new Array<fournisseur>();
                  this._fournisseur.forEach(fourni =>{
                    fourni = new fournisseur();
                  })
                }
                return this._fournisseur;
              }
            
              set fournisseur (four: Array<fournisseur>) {
                this._fournisseur = four;
              }
public findAll() {
   this.http.get<Array<fournisseur>>(this.url +'findAllFournisseur').subscribe(
     data => {
       if (data != null) {
         this.fournisseur = data;
       console.log('ha data' + data);
         }
      }, eror => {
       console.log('eroro');
     }
   );
}
public chercherUnFournisseurParName(name: string){
  this.http.get<Array<fournisseur>>(this.url+'findFournisseurByName/'+ name).subscribe(
    data => {
      if (data != null ) {
        this.fournisseur = data;
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
        this.fournisseur = data;
        console.log('ha data' + data);
      }
    }, eror => {
      console.log('eroro');
    });
}
}
