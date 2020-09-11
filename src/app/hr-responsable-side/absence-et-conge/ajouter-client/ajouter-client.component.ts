import { Component, OnInit } from '@angular/core';
import { client } from 'src/app/controller/model/client.model';
import { clientService } from 'src/app/controller/service/client.service';

@Component({
  selector: 'app-ajouter-client',
  templateUrl: './ajouter-client.component.html',
  styleUrls: ['./ajouter-client.component.css']
})
export class AjouterClientComponent implements OnInit {

  constructor(private clientService: clientService) { }
get clientAjout(): client {
  return this.clientService.clientAjout;
}
categorie: string;
  public variables = ['Forces armées ', 'Police', 'finances', 'emploi', 'économie', 'justice', 'Laboratoire et police scientifique', 'Criminologie', 'Pompier', 'protection civile', 'ambulancier', 'Assureur', 'Banques ', 'Comptable', 'Expert comptable', 'Réviseur d’entreprises', 'Marketing', 'Délégué commercial', 'Secrétaire', 'Ingénieur de gestion', 'Gestion d’entreprise', 'Gestion des ressources humaines', 'autre'];
  public filteredList1 = this.variables.slice();
  public variables1 = ['A', 'A1', 'A2', 'B', 'B1', 'BE', 'C1E', 'C', 'C1', 'C1E', 'D', 'D1', 'D1E', 'DE']
  public filteredList2 = this.variables1.slice();
  ngOnInit(): void {
    this.categorie = 'client';
  }
  public showNumeroPermis(){
    console.log('hello1');
    if(this.clientAjout.possedePermis === true){
      console.log('hello');
      document.getElementById('numero').style.display = 'inline';
    } else {
      document.getElementById('numero').style.display = 'none';
    }
  }
public ajouterUnclient(){
  this.clientService.ajouterUnclient();
}
public show(): boolean{
    if(this.clientAjout.profession === 'autre') {
      return true;
    } else {
      return false;
    }
}
}
