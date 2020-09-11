import { Component, OnInit } from '@angular/core';
import {EmployeServiceService} from '../../controller/service/employe-service.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {Employe} from '../../controller/model/employe.model';
import {AjoutFournisseurComponent} from "../gestion-personnel/ajout-fournisseur.component";

@Component({
  selector: 'app-listes-des-employe',
  templateUrl: './listes-des-employe.component.html',
  styleUrls: ['./listes-des-employe.component.css']
})
export class ListesDesEmployeComponent implements OnInit {


  constructor(private employeService: EmployeServiceService,
              private dialog: MatDialog) { }
  private _motif: string;

  get motif(): string {
    return this._motif;
  }

  set motif(value: string) {
    this._motif = value;
  }
  cols: any;
  ngOnInit() {
    this.employeService.findAll();
    this.cols = [
      { field: 'nomFR', header: 'Nom FR' },
      { field: 'nomAR', header: 'Nom AR' },
      { field: 'prenomFR', header: 'prenom FR' },
      { field: 'prenomAR', header: 'prenom AR' },
      { field: 'addresseFR', header: 'adresse FR' },
      { field: 'adresseAR', header: 'adresse AR' },
      { field: 'dateNaissance', header: 'date de Naissance' },
    ];
  }
  get employes(): Array<Employe> {
    return this.employeService.employes;
  }
  public ajouterUnEmploye() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '90%';
    dialogConfig.height = '100%';
    this.dialog.open(AjoutFournisseurComponent,
      dialogConfig);
  }
}
