import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Employe} from '../model/employe.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeServiceService {

  constructor(private http: HttpClient) { }
  private _employes: Array<Employe>;
  private _employeAjout: Employe;
  private _ajoutEmp: string;


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
}
