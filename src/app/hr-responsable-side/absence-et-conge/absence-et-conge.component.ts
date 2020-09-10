import { Component, OnInit } from '@angular/core';
import { client } from 'src/app/controller/model/client.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { clientService } from 'src/app/controller/service/client.service';
import { AjouterClientComponent } from './ajouter-client/ajouter-client.component';

@Component({
  selector: 'app-absence-et-conge',
  templateUrl: './absence-et-conge.component.html',
  styleUrls: ['./absence-et-conge.component.css']
})
export class AbsenceEtCongeComponent implements OnInit {

  constructor(private dialog :MatDialog,
    private clientService: clientService,
    ) { }

ngOnInit(): void {
  this.clientService.findAll();
}
get clientSearch(): client {
  return this.clientService.clientSearch;
}
public chercher(){
  if(this.clientSearch.CODE_CLI === 'code'){
    console.log('ha data'+this.clientSearch.CODE_CLI)
    this.clientService.chercherUnclientParCode(this.clientSearch.ENTREPRISE_CLI);
  }else{
    this.clientService.chercherUnclientParNomDeEntrprise(this.clientSearch.ENTREPRISE_CLI);
  }
}
public ajouterfournisseur() {
const dialogConfig = new MatDialogConfig();
dialogConfig.disableClose = true;
dialogConfig.autoFocus = true;
dialogConfig.width = '80%';
dialogConfig.height = '80%';
this.dialog.open(AjouterClientComponent,dialogConfig);
}

  get client(): Array<client> {
    return this.clientService.client;
  }
}
