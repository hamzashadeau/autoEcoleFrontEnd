import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {reserver} from '../model/reserver.model';
import {Utlisateur} from '../model/utlisateur.model';
import {Employe} from '../model/employe.model';
import {environment} from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UtlisateurService {

  constructor(private http: HttpClient,
              private router: Router,
              private toast: ToastrService
  ) { }

  get utilisateu(): Utlisateur {
    if (this._utilisateu == null) {
      this._utilisateu = new Utlisateur();
    }
    return this._utilisateu;
  }

  set utilisateu(value: Utlisateur) {
    this._utilisateu = value;
  }

  get utilisateur(): Utlisateur {
    if (this._utilisateu == null) {
      this._utilisateu = new Utlisateur();
      this._utilisateu.employe = new Employe();
    }
    return this._utilisateur;
  }

  set utilisateur(value: Utlisateur) {
    this._utilisateur = value;
  }

  get retrievedImage(): any {
    return this._retrievedImage;
  }

  set retrievedImage(value: any) {
    this._retrievedImage = value;
  }
  urlprod = environment.Url + 'autoEcole-Api/utilisateur/';
  private _utilisateu: Utlisateur;

  url = 'http://localhost:8080/autoEcole-Api/utilisateur/';
  private _utilisateur: Utlisateur;
  private  options = {
    headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
  };

  private _retrievedImage: any;
  base64Data: any;
  public seConnecter(login: string, mdp: string) {
    this.http.get<number>(this.urlprod + 'seConnecter/login/' + login + '/mdp/' + mdp).subscribe(
      data => {
          if (data === -1) {
            this.toast.error(` cette utilisateur est introvable`, 'utilisateur introvable', {
              timeOut: 2500,
              progressBar: true,
              progressAnimation: 'increasing',
              positionClass: 'toast-top-right'
            });
        } else if (data === -2) {
            this.toast.error(` mot de passe est incorrect`, 'mot de passe incorrect', {
              timeOut: 2500,
              progressBar: true,
              progressAnimation: 'increasing',
              positionClass: 'toast-top-right'
            });
          } else if (data === 1) {
            this.findByLogin(login);
            this.router.navigateByUrl('RhResponsable');
            localStorage.setItem('login', login);
          }
      }, eror => {
        console.log('eroro');
      });
  }

  public resetPassword(email: string, oldPassword: string, nvpassword: string) {
    this.http.get<number>(this.urlprod + 'resetPassword/email/' + email + '/oldPassword/' + oldPassword + '/nvPassword/' + nvpassword).subscribe(
      data => {
        if (data != null) {
          console.log('ha data' + data);
        }
      }, eror => {
        console.log('eroro');
      });
  }
  public resetPasswordCodeVerification(cin: string, nvpassword: string, email: string) {
    this.http.get<number>(this.urlprod + 'resetPasswordCodeVerification/email/' + email + '/nvpassword/' + nvpassword + '/code/' + cin).subscribe(
      data => {
        if (data != null) {
          console.log('ha data' + data);
        }
      }, eror => {
        console.log('eroro');
      });
  }
  public findByLogin(login: string) {
    this.http.get<Utlisateur>(this.urlprod + 'findByLogin/login/' + login).subscribe(
      data => {
        if (data != null) {
          this.utilisateu = data;
          this.base64Data = this.utilisateu.employe.image;
          this._retrievedImage = 'data:' + this.utilisateu.employe.imageType + ';base64,' + this.base64Data;
          console.log('ha data' + data);
        }
      }, eror => {
        console.log('eroro');
      });
  }

}
