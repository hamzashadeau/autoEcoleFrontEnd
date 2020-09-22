import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, Validators} from '@angular/forms';
import {LogInService} from '../controller/service/log-in.service';
import {UtlisateurService} from "../controller/service/utlisateur.service";
import {Utlisateur} from "../controller/model/utlisateur.model";
import {clientService} from "../controller/service/client.service";
import {EtatFinanciereService} from "../controller/service/etat-financiere.service";
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
              private utlisateurService: UtlisateurService,
              private clientService: clientService,
              private etatFinancierService: EtatFinanciereService) { }
mois: number;
  year: number;
  ngOnInit(): void {
    this.mois = (new Date().getMonth() + 1);
    this.year = (new Date().getFullYear());
    this.clientService.findAllClientsParMois1AndAnnee(1, this.year);
    this.clientService.findAllClientsParMois2AndAnnee(2, this.year);
    this.clientService.findAllClientsParMois3AndAnnee(3, this.year);
    this.clientService.findAllClientsParMois4AndAnnee(4, this.year);
    this.clientService.findAllClientsParMois5AndAnnee(5, this.year);
    this.clientService.findAllClientsParMois6AndAnnee(6, this.year);
    this.clientService.findAllClientsParMois7AndAnnee(7, this.year);
    this.clientService.findAllClientsParMois8AndAnnee(8, this.year);
    this.clientService.findAllClientsParMois9AndAnnee(9, this.year);
    this.clientService.findAllClientsParMois10AndAnnee(10, this.year);
    this.clientService.findAllClientsParMois11AndAnnee(11, this.year);
    this.clientService.findAllClientsParMois12AndAnnee(12, this.year);

    this.etatFinancierService.findAllDepensesParMois1AndAnnee(1, this.year);
    this.etatFinancierService.findAllDepensesParMois2AndAnnee(2, this.year);
    this.etatFinancierService.findAllDepensesParMois3AndAnnee(3, this.year);
    this.etatFinancierService.findAllDepensesParMois4AndAnnee(4, this.year);
    this.etatFinancierService.findAllDepensesParMois5AndAnnee(5, this.year);
    this.etatFinancierService.findAllDepensesParMois6AndAnnee(6, this.year);
    this.etatFinancierService.findAllDepensesParMois7AndAnnee(7, this.year);
    this.etatFinancierService.findAllDepensesParMois8AndAnnee(8, this.year);
    this.etatFinancierService.findAllDepensesParMois9AndAnnee(9, this.year);
    this.etatFinancierService.findAllDepensesParMois10AndAnnee(10, this.year);
    this.etatFinancierService.findAllDepensesParMois11AndAnnee(11, this.year);
    this.etatFinancierService.findAllDepensesParMois12AndAnnee(12, this.year);

    this.etatFinancierService.findAllGainsParMois1AndAnnee(1, this.year);
    this.etatFinancierService.findAllGainsParMois2AndAnnee(2, this.year);
    this.etatFinancierService.findAllGainsParMois3AndAnnee(3, this.year);
    this.etatFinancierService.findAllGainsParMois4AndAnnee(4, this.year);
    this.etatFinancierService.findAllGainsParMois5AndAnnee(5, this.year);
    this.etatFinancierService.findAllGainsParMois6AndAnnee(6, this.year);
    this.etatFinancierService.findAllGainsParMois7AndAnnee(7, this.year);
    this.etatFinancierService.findAllGainsParMois8AndAnnee(8, this.year);
    this.etatFinancierService.findAllGainsParMois9AndAnnee(9, this.year);
    this.etatFinancierService.findAllGainsParMois10AndAnnee(10, this.year);
    this.etatFinancierService.findAllGainsParMois11AndAnnee(11, this.year);
    this.etatFinancierService.findAllGainsParMois12AndAnnee(12, this.year);

    this.clientService.findByPermisDemandeA('A');
    this.clientService.findByPermisDemandeB('B');
    this.clientService.findByPermisDemandeC('C');
    this.clientService.findByPermisDemandeD('D');
  }
  get utilisateu(): Utlisateur {
    return this.utlisateurService.utilisateu;
  }
  login() {
                this.router.navigateByUrl('RhResponsable');
   // this.utlisateurService.seConnecter(this.utilisateu.login, this.utilisateu.modDePasse);
  }

}
