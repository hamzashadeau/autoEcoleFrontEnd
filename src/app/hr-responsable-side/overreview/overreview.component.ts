import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {AjoutFournisseurComponent} from '../gestion-personnel/ajout-fournisseur/ajout-fournisseur.component';
import { reserver } from 'src/app/controller/model/reserver.model';
import { reservationService } from 'src/app/controller/service/reservation.service';
import { AjoutReservationComponent } from './ajout-reservation/ajout-reservation.component';

@Component({
  selector: 'app-overreview',
  templateUrl: './overreview.component.html',
  styleUrls: ['./overreview.component.css']
})
export class OverreviewComponent implements OnInit {

  constructor(private dialog :MatDialog,
              private reservationService: reservationService) { }
  get reservation(): Array<reserver> {
    return this.reservationService.reservation;
  }
  get reservationSearch(): reserver {
    return this.reservationService.reservationSearch;
  }
  ngOnInit(): void {
    this.reservationService.findAll();
  }
  public chercher(){
    this.reservationService.findByDate();
  }
  
  public ajouterReservation() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '90%';
    dialogConfig.height = '80%';
    this.dialog.open(AjoutReservationComponent,dialogConfig);
  }


}
