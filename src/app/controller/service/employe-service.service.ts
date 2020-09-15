import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Employe} from '../model/employe.model';
import {PaimentDeEmploye} from "../model/paiment-de-employe.model";
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class EmployeServiceService {

  constructor(private http: HttpClient,
              private toast: ToastrService) { }
  private _employes: Array<Employe>;
  private _employeAjout: Employe;
  private _ajoutEmp: string;
  private _infoEmploye: Employe;

  public conpierInfoEmploye(emp: Employe){
    this.base64Data = emp.image;
    this._retrievedImage = 'data:' + emp.imageType + ';base64,' + this.base64Data;
    this.infoEmploye = emp;
  }
public save(){
  this.http.post<number>('http://localhost:8080/autoEcole-Api/Employe/save' , this.employeAjout).subscribe(
    data => {
      if (data != null ) {
        this.toast.success(` employe est bien sauvgarder`, 'employe sauvgarder', {
          timeOut: 2500,
          progressBar: true,
          progressAnimation: 'increasing',
          positionClass: 'toast-top-right'
        });
        console.log('ha data' + data);
        this.employeAjout = null;
      }
    }, eror => {
      console.log('eroro');
    });
}
private _avancementAjoute: PaimentDeEmploye;

  get avancementAjoute(): PaimentDeEmploye {
    if(this._avancementAjoute == null){
      this._avancementAjoute = new PaimentDeEmploye();
    }
    return this._avancementAjoute;
  }

  set avancementAjoute(value: PaimentDeEmploye) {
    this._avancementAjoute = value;
  }

  public saveAvancement(){
    this.avancementAjoute.employe = this.infoEmploye;
    this.http.post<number>('http://localhost:8080/autoEcole-Api/paimentDeEmploye/save' , this.avancementAjoute).subscribe(
      data => {
        if (data != null ) {
          this.toast.success(` Avancement employe est bien sauvgarder`, 'avancement sauvgarder', {
            timeOut: 2500,
            progressBar: true,
            progressAnimation: 'increasing',
            positionClass: 'toast-top-right'
          });
          this.findpaimentEmployeByCInAndMois(this.infoEmploye.cin, new Date().getMonth() + 1);
          console.log('ha data' + data);
          this.employeAjout = null;
        }
      }, eror => {
        console.log('eroro');
      });
  }

  public uploadFile(form: FormData) {
    this.http.post<number>('http://localhost:8080/autoEcole-Api/Employe/uploadFile' , form).subscribe(
      data => {
        if (data != null ) {
          console.log('ha data' + data);
        }
      }, eror => {
        console.log('eroro');
      });
  }
  public edit(){
    this.http.post<number>('http://localhost:8080/autoEcole-Api/Employe/edit' , this.employeAjout).subscribe(
      data => {
        if (data != null ) {
          this.toast.info(` employe est bien modified`, 'employe modified', {
            timeOut: 2500,
            progressBar: true,
            progressAnimation: 'increasing',
            positionClass: 'toast-top-right'
          });
          console.log('ha data' + data);
          this.employeAjout = null;
        }
      }, eror => {
        console.log('eroro');
      });
  }
  private _retrievedImage: any;
  base64Data: any;

  get retrievedImage(): any {
    return this._retrievedImage;
  }

  set retrievedImage(value: any) {
    this._retrievedImage = value;
  }
  public modifier(emp: Employe){
    this.employeAjout = emp;
  }
  get infoEmploye(): Employe {
    if (this._infoEmploye == null){
      this._infoEmploye = new Employe();
    }
    return this._infoEmploye;
  }

  set infoEmploye(value: Employe) {
    this._infoEmploye = value;
  }

  get ajoutEmp(): string {
    return this._ajoutEmp;
  }

  set ajoutEmp(value: string) {
    this._ajoutEmp = value;
  }

  get employeAjout(): Employe {
    if(this._employeAjout == null){
      this._employeAjout = new Employe();
    }
    return this._employeAjout;
  }

  set employeAjout(value: Employe) {
    this._employeAjout = value;
  }

  get employes(): Array<Employe> {
    if (this._employes == null){
      this._employes = new Array<Employe>();
      this._employes.forEach(emp => {
        emp = new Employe();
      });
    }
    return this._employes;
  }

  set employes(value: Array<Employe>) {
    this._employes = value;
  }

  public  findAll() {
    this.http.get<Array<Employe>>('http://localhost:8080/autoEcole-Api/Employe/findAll').subscribe(
      data => {
        this.employes = data;
        console.log('sucess');
      }, eror => {
        console.log('eroro');
      });
  }
  private _paimentEmploye: Array<PaimentDeEmploye>;

  get paimentEmploye(): Array<PaimentDeEmploye> {
    if(this._paimentEmploye == null){
      this._paimentEmploye = new Array<PaimentDeEmploye>();
      this._paimentEmploye.forEach(pay => {
        pay = new PaimentDeEmploye();
        pay.employe = new Employe();
      });
    }
    return this._paimentEmploye;
  }

  set paimentEmploye(value: Array<PaimentDeEmploye>) {
    this._paimentEmploye = value;
  }
private _montantRest: number;

  get montantRest(): number {
    return this._montantRest;
  }

  set montantRest(value: number) {
    this._montantRest = value;
  }

  public  findpaimentEmployeByCInAndMois(cin: string, mois: number) {
    this.http.get<Array<PaimentDeEmploye>>('http://localhost:8080/autoEcole-Api/paimentDeEmploye/findByEmployeCinAndMois/cin/' + cin + '/mois/' + mois).subscribe(
      data => {
        this.montantRest = 0;
        this.paimentEmploye = data;
        this.paimentEmploye.forEach(emp => {
          this.montantRest += emp.monatant;
        });
        this.montantRest = this.infoEmploye.salaire - this.montantRest;
        console.log(this.montantRest);
        console.log(this.paimentEmploye);
        console.log('sucess');
      }, eror => {
        console.log('eroro');
      });
  }
}
