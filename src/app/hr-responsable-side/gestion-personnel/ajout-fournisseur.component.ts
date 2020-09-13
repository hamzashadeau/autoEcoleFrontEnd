import { Component, OnInit } from '@angular/core';
import { FournisseurService } from 'src/app/controller/service/fournisseur.service';
import { fournisseur } from 'src/app/controller/model/fournisseur.model';
import {EmployeServiceService} from '../../controller/service/employe-service.service';
import {Employe} from '../../controller/model/employe.model';

@Component({
  selector: 'app-ajout-fournisseur',
  templateUrl: './ajout-fournisseur.component.html',
  styleUrls: ['./ajout-fournisseur.component.css']
})
export class AjoutFournisseurComponent implements OnInit {

  constructor(private employeService: EmployeServiceService) { }
  get employeAjout(): Employe {
    return this.employeService.employeAjout;
  }
categorie: string;
ajouterUnEmploye() {
  if(this.employeAjout.id === null){
    this.employeService.save();
  } else{
    this.employeService.edit();
  }
}
  ngOnInit(): void {
    this.categorie = 'fournisseur';
  }
  public show(): boolean {
    if (this.employeAjout.situationFamiliale === 'Marie') {
      return true;
    } else {
      return false;
    }
  }
}
