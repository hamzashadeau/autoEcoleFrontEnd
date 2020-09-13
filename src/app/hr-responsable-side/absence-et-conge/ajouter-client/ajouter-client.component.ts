import { Component, OnInit } from '@angular/core';
import { client } from 'src/app/controller/model/client.model';
import { clientService } from 'src/app/controller/service/client.service';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-ajouter-client',
  templateUrl: './ajouter-client.component.html',
  styleUrls: ['./ajouter-client.component.css']
})
export class AjouterClientComponent implements OnInit {
  selectedFile: File;
  uploadForm: FormGroup;
  constructor(private clientService: clientService,
              private formBuilder: FormBuilder) { }
get clientAjout(): client {
  return this.clientService.clientAjout;
}
  public onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    document.getElementById('lebel1').innerText = this.selectedFile.name;
    this.clientAjout.imageName =  this.selectedFile.name.split('.').shift();
    this.uploadForm.get('profile').setValue(this.selectedFile);
  }
  uploadFile() {
    this.uploadForm.get('profile').setValue(this.selectedFile);
    console.log(this.selectedFile);
    const formData = new FormData();
    formData.append('file', this.uploadForm.get('profile').value);
    this.clientService.uploadFile(formData);
  }
categorie: string;
  public variables = ['Forces armées ', 'Police', 'finances', 'emploi', 'économie', 'justice', 'Laboratoire et police scientifique', 'Criminologie', 'Pompier', 'protection civile', 'ambulancier', 'Assureur', 'Banques ', 'Comptable', 'Expert comptable', 'Réviseur d’entreprises', 'Marketing', 'Délégué commercial', 'Secrétaire', 'Ingénieur de gestion', 'Gestion d’entreprise', 'Gestion des ressources humaines', 'autre'];
  public filteredList1 = this.variables.slice();
  public variables1 = ['A', 'A1', 'A2', 'B', 'B1', 'BE', 'C1E', 'C', 'C1', 'C1E', 'D', 'D1', 'D1E', 'DE'];
  public filteredList2 = this.variables1.slice();
  ngOnInit(): void {
    this.categorie = 'client';
    this.uploadForm = this.formBuilder.group({
      profile: ['']
    });
  }
  public showNumeroPermis(){
    if(this.clientAjout.possedePermis === true){
      console.log('hello');
      document.getElementById('numero').style.display = 'inline';
    } else {
      document.getElementById('numero').style.display = 'none';
    }
  }
public ajouterUnclient(){
    this.uploadFile();
    this.clientService.save();
  //this.clientService.ajouterUnclient();
}
public show(): boolean{
    if(this.clientAjout.profession === 'autre') {
      return true;
    } else {
      return false;
    }
}
}
