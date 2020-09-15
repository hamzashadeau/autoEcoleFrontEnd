import { Component, OnInit } from '@angular/core';
import {Employe} from "../../../controller/model/employe.model";
import {EmployeServiceService} from "../../../controller/service/employe-service.service";
import {PaimentDeEmploye} from "../../../controller/model/paiment-de-employe.model";

@Component({
  selector: 'app-details-employes',
  templateUrl: './details-employes.component.html',
  styleUrls: ['./details-employes.component.css']
})
export class DetailsEmployesComponent implements OnInit {
mois: number;
  constructor(private employeService: EmployeServiceService) { }
  get infoEmploye(): Employe {
    return this.employeService.infoEmploye;
  }
  get paimentEmploye(): Array<PaimentDeEmploye> {
    return this.employeService.paimentEmploye;
  }
  get retrievedImage(): any {
    return this.employeService.retrievedImage;
  }
  get avancementAjoute(): PaimentDeEmploye {
    return this.employeService.avancementAjoute;
  }
  cols: any;
  ngOnInit(): void {
    this.mois = new Date().getMonth() +1;
    this.employeService.findpaimentEmployeByCInAndMois(this.infoEmploye.cin, this.mois);
    this.cols = [
      { field: 'monatant', header: 'Montant de avancement'},
      { field: 'date', header: 'Date de avancement' },
    ];
  }
  get montantRest(): number {
    return this.employeService.montantRest;
  }
public ajouterUnPaiment(){
    this.employeService.saveAvancement();
}
}
