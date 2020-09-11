import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { reserver } from 'src/app/controller/model/reserver.model';
import { reservationService } from 'src/app/controller/service/reservation.service';


@Component({
  selector: 'app-overreview',
  templateUrl: './overreview.component.html',
  styleUrls: ['./overreview.component.css']
})
export class OverreviewComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
  }

  // public ajouterReservation() {
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.disableClose = true;
  //   dialogConfig.autoFocus = true;
  //   dialogConfig.width = '90%';
  //   dialogConfig.height = '80%';
  //   this.dialog.open(AjoutReservationComponent,dialogConfig);
  // }
  }


