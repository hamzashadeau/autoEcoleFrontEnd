import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {ClientHeureAjoute} from "../model/client-heure-ajoute.model";

@Injectable({
  providedIn: 'root'
})
export class ClientHeureAjouteService {

  constructor(private http: HttpClient,
              private router: Router,
              private toast: ToastrService
  ) { }

  private _clients: Array<ClientHeureAjoute>;
  private _clientAjout: ClientHeureAjoute;
  private _clientInfo: ClientHeureAjoute;

  get clients(): Array<ClientHeureAjoute> {
    if(this._clients == null){
      this._clients = new Array<ClientHeureAjoute>();
      this._clients.forEach(cli =>{
        cli = new ClientHeureAjoute();
      });
    }
    return this._clients;
  }

  set clients(value: Array<ClientHeureAjoute>) {
    this._clients = value;
  }

  get clientAjout(): ClientHeureAjoute {
    if(this._clientAjout == null){
      this._clientAjout = new ClientHeureAjoute();
    }
    return this._clientAjout;
  }

  set clientAjout(value: ClientHeureAjoute) {
    this._clientAjout = value;
  }

  get clientInfo(): ClientHeureAjoute {
    if(this._clientInfo == null){
      this._clientInfo = new ClientHeureAjoute();
    }
    return this._clientInfo;
  }

  set clientInfo(value: ClientHeureAjoute) {
    this._clientInfo = value;
  }
  public edit(cli: ClientHeureAjoute) {
    this.http.post<number>('http://localhost:8080/autoEcole-Api/ClientHeureAjoute/edit' , cli).subscribe(
      data => {
        if (data === 1 ) {
          this.toast.info(`client est bien modified`, 'employe modified', {
            timeOut: 2500,
            progressBar: true,
            progressAnimation: 'increasing',
            positionClass: 'toast-top-right'
          });
          console.log('ha data' + data);
          this.clientAjout = null;
        }
      }, eror => {
        console.log('eroro');
      });
  }
  public save() {
    this.http.post<number>('http://localhost:8080/autoEcole-Api/ClientHeureAjoute/save' , this.clientAjout).subscribe(
      data => {
        if (data === 1 ) {
          this.toast.success(`client est bien modified`, 'employe modified', {
            timeOut: 2500,
            progressBar: true,
            progressAnimation: 'increasing',
            positionClass: 'toast-top-right'
          });
          console.log('ha data' + data);
          this.findAujourdHui();
          this.clientAjout = null;
        }
      }, eror => {
        console.log('eroro');
      });
  }

  public findAll() {
    this.http.get<Array<ClientHeureAjoute>>('http://localhost:8080/autoEcole-Api/ClientHeureAjoute/findAll').subscribe(
      data => {
        if (data != null ) {
          this.clients = data;
          console.log('ha data' + data);
        }
      }, eror => {
        console.log('eroro');
      });
  }
  public genererCodeClient() {
    this.findAll();
    this.clientAjout.generatedcode = (this.clients.length + 1 ) + '/' + new Date().getFullYear();
  }
  public modiferCeClient(cli: ClientHeureAjoute){
    this.clientAjout = cli;
  }
  public findAujourdHui() {
    this.http.get<Array<ClientHeureAjoute>>('http://localhost:8080/autoEcole-Api/ClientHeureAjoute/findByDateAujourdHui').subscribe(
      data => {
        if (data != null ) {
          this.clients = data;
          console.log('ha data' + data);
        }
      }, eror => {
        console.log('eroro');
      });
  }
  public findBydate(date: Date) {
    this.http.get<Array<ClientHeureAjoute>>('http://localhost:8080/autoEcole-Api/ClientHeureAjoute/findByDate/date/'+ date).subscribe(
      data => {
        if (data != null ) {
          this.clients = data;
          console.log('ha data' + data);
        }
      }, eror => {
        console.log('eroro');
      });
  }
  public findDayNext() {
    this.http.get<Array<ClientHeureAjoute>>('http://localhost:8080/autoEcole-Api/ClientHeureAjoute/findByDateSuivant').subscribe(
      data => {
        if (data != null ) {
          this.clients = data;
          console.log('ha data' + data);
        }
      }, eror => {
        console.log('eroro');
      });
  }
  public findDayPrevious() {
    this.http.get<Array<ClientHeureAjoute>>('http://localhost:8080/autoEcole-Api/ClientHeureAjoute/findByDateAvant').subscribe(
      data => {
        if (data != null ) {
          this.clients = data;
          console.log('ha data' + data);
        }
      }, eror => {
        console.log('eroro');
      });
  }
  public  deleteById(id: number) {
    this.http.delete<number>('http://localhost:8080/autoEcole-Api/ClientHeureAjoute/deleteById/' + id).subscribe(
      data => {
        console.log('sucess');
      }, eror => {
        console.log('eroro');
      });
  }
}
