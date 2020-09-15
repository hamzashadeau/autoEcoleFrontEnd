import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, Validators} from '@angular/forms';
import {LogInService} from '../controller/service/log-in.service';
import {UtlisateurService} from "../controller/service/utlisateur.service";
import {Utlisateur} from "../controller/model/utlisateur.model";
/**
 * @title Input with error messages
 */
@Component({
  selector: 'app-login-side',
  templateUrl: './login-side.component.html',
  styleUrls: ['./login-side.component.css']
})
export class LoginSideComponent implements OnInit {
  nom: string;
  password: string;
  showErrors;
  constructor(private router: Router,
              private utlisateurService: UtlisateurService) { }

  ngOnInit(): void {

  }
  get utilisateu(): Utlisateur {
    return this.utlisateurService.utilisateu;
  }
  login() {
    this.utlisateurService.seConnecter(this.utilisateu.login, this.utilisateu.modDePasse);
  }

}
