import { Component, OnInit } from '@angular/core';
import { FournisseurService } from 'src/app/controller/service/fournisseur.service';
import { fournisseur } from 'src/app/controller/model/fournisseur.model';

@Component({
  selector: 'app-ajout-fournisseur',
  templateUrl: './ajout-fournisseur.component.html',
  styleUrls: ['./ajout-fournisseur.component.css']
})
export class AjoutFournisseurComponent implements OnInit {

  constructor(private fournisseurService: FournisseurService) { }

  ngOnInit(): void {
    this.categorie = 'fournisseur';
  }
categorie: string;
get fournisseurAjout(): fournisseur {
  return this.fournisseurService.fournisseurAjout;
}
public ajouterFournisseur(){
  this.fournisseurService.ajouterUnFournisseur();
}
}
