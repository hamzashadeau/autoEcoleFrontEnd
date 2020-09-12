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
  cols: any;
  ngOnInit(): void {
    this.mois = new Date().getMonth()+1;
    this.cols = [
      { field: 'monatant', header: 'Montant de avancement'},
      { field: 'date', header: 'Date de avancement' },
    ];
  }

}
