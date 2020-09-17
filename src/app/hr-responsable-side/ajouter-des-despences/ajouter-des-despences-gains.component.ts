import { Component, OnInit } from '@angular/core';
import {EtatFinanciere} from "../../controller/model/etat-financiere.model";
import {EtatFinanciereService} from "../../controller/service/etat-financiere.service";

@Component({
  selector: 'app-ajouter-des-despences-gains',
  templateUrl: './ajouter-des-despences-gains.component.html',
  styleUrls: ['./ajouter-des-despences-gains.component.css']
})
export class AjouterDesDespencesGainsComponent implements OnInit {

  constructor(private etatFinancierService: EtatFinanciereService) { }
  get etatAjout(): EtatFinanciere {
    return this.etatFinancierService.etatAjout;
  }
  public variables1 = ['facture wifi', 'facture electricité', 'autre', 'facture de petrole', 'facture de location'];
  public filteredList2 = this.variables1.slice();
  ngOnInit(): void {
    this.show();
  }
  public ajouter(){
    this.etatFinancierService.save();
  }
public show() {
    if(this.etatAjout.nom === 'autre' || this.etatAjout.type === 'gains'){
      console.log('hello');
      document.getElementById('nom').style.display = 'inline';
    } else {
      document.getElementById('nom').style.display = 'none';
    }
}
}
