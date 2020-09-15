import { Component, OnInit } from '@angular/core';
import { FournisseurService } from 'src/app/controller/service/fournisseur.service';
import { fournisseur } from 'src/app/controller/model/fournisseur.model';
import {EmployeServiceService} from '../../controller/service/employe-service.service';
import {Employe} from '../../controller/model/employe.model';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-ajout-fournisseur',
  templateUrl: './ajout-fournisseur.component.html',
  styleUrls: ['./ajout-fournisseur.component.css']
})
export class AjoutFournisseurComponent implements OnInit {
  selectedFile: File;
  uploadForm: FormGroup;
  constructor(private employeService: EmployeServiceService,
              private formBuilder: FormBuilder) { }
  get employeAjout(): Employe {
    return this.employeService.employeAjout;
  }
categorie: string;
ajouterUnEmploye() {
  if(this.employeAjout.id == null){
    this.uploadFile();
    this.employeService.save();
  } else{
    this.employeService.edit();
  }
}
  ngOnInit(): void {
    this.uploadForm = this.formBuilder.group({
      profile: ['']
    });
    this.categorie = 'fournisseur';
  }
  public show(): boolean {
    if (this.employeAjout.situationFamiliale === 'Marie') {
      return true;
    } else {
      return false;
    }
  }
  uploadFile() {
    this.uploadForm.get('profile').setValue(this.selectedFile);
    console.log(this.selectedFile);
    const formData = new FormData();
    formData.append('file', this.uploadForm.get('profile').value);
    this.employeService.uploadFile(formData);
  }
  public onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    document.getElementById('lebel1').innerText = this.selectedFile.name;
    this.employeAjout.imageName =  this.selectedFile.name.split('.').shift();
    this.uploadForm.get('profile').setValue(this.selectedFile);
  }
}
