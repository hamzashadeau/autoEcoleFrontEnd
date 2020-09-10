import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {AjoutFournisseurComponent} from "./ajout-fournisseur/ajout-fournisseur.component";
import {FormBuilder, FormGroup} from '@angular/forms';
import {LogInService} from "../../controller/service/log-in.service";
import { fournisseur } from 'src/app/controller/model/fournisseur.model';
import { FournisseurService } from 'src/app/controller/service/fournisseur.service';
import { clientService } from 'src/app/controller/service/client.service';
import { client } from 'src/app/controller/model/client.model';

@Component({
  selector: 'app-gestion-personnel',
  templateUrl: './gestion-personnel.component.html',
  styleUrls: ['./gestion-personnel.component.css']
})
export class GestionPersonnelComponent implements OnInit {

  constructor(private dialog :MatDialog,
              private formBuilder: FormBuilder,
              private fournisseurService: FournisseurService,
              private loginService: LogInService,
              private clientService: clientService) { }

  ngOnInit(): void {
       this.loginService.findAll();
       this.fournisseurService.findAll();
  }
  get fournisseur (): Array<fournisseur> {
    return this.loginService.fournisseur;
  }
  get fournisseurSearch(): client {
    return this.clientService.clientSearch;
  }
  public chercher(){
    if(this.fournisseurSearch.CODE_CLI === 'nom'){
      console.log('ha data'+this.fournisseurSearch.ENTREPRISE_CLI)
      this.loginService.chercherUnFournisseurParName(this.fournisseurSearch.ENTREPRISE_CLI);
    }else{
      this.loginService.chercherUnfournisseurParCategorie(this.fournisseurSearch.ENTREPRISE_CLI);
  }
  }
  public ajouterfournisseur() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '80%';
    dialogConfig.height = '80%';
    this.dialog.open(AjoutFournisseurComponent,dialogConfig);
  }
}
