import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {HistoriqueApp} from '../model/historique-app.model';
import {EtatFinanciere} from '../model/etat-financiere.model';

@Injectable({
  providedIn: 'root'
})
export class HistoriqueApplicationService {

  constructor(private http: HttpClient,
              private router: Router,
              private toast: ToastrService
  ) { }
  private url= 'http://localhost:8080/autoEcole-Api/historiqueApplication/findAll';
  private _historiqueList : Array<HistoriqueApp> ;


  get historiqueList(): Array<HistoriqueApp> {
    if(this._historiqueList==null){
      this._historiqueList=new Array<HistoriqueApp>();
    }
    return this._historiqueList;
  }

  set historiqueList(value: Array<HistoriqueApp>) {
    this._historiqueList = value;
  }

  public  findAllHistoriques() {
    this.http.get<Array<HistoriqueApp>>(this.url).subscribe(
      data => {
        this.historiqueList = data;
        console.log('sucess Historique');
      }, eror => {
        console.log('eroro Historique');
      });
  }
}
