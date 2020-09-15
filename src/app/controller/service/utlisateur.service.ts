import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {reserver} from '../model/reserver.model';

@Injectable({
  providedIn: 'root'
})
export class UtlisateurService {

  constructor(private http: HttpClient,
              private router: Router,
              private toast: ToastrService
  ) { }
   private url: string;
    url = 'http://localhost:8080/autoEcole-Api/utilisateur/';
  public seConnecter(login: string, mdp: string) {
    this.http.get<number>(this.url + 'seConnecter/login/' + login + '/mdp/' + mdp).subscribe(
      data => {
        if (data != null) {
          console.log('ha data' + data);
        }
      }, eror => {
        console.log('eroro');
      });
  }
  public resetPassword(email: string, nvpassword: string) {
    this.http.get<number>(this.url + 'resetPassword/email/' + email + '/nvPassword/' + nvpassword).subscribe(
      data => {
        if (data != null) {
          console.log('ha data' + data);
        }
      }, eror => {
        console.log('eroro');
      });
  }
  public resetPasswordCodeVerification(cin: string, nvpassword: string, email: string) {
    this.http.get<number>(this.url + 'resetPasswordCodeVerification/email/' + email + '/nvpassword/' + nvpassword + '/code/' +cin).subscribe(
      data => {
        if (data != null) {
          console.log('ha data' + data);
        }
      }, eror => {
        console.log('eroro');
      });
  }
}
