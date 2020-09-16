import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { reserver } from 'src/app/controller/model/reserver.model';
import { reservationService } from 'src/app/controller/service/reservation.service';
import {EtatFinanciereService} from '../../controller/service/etat-financiere.service';


@Component({
  selector: 'app-overreview',
  templateUrl: './overreview.component.html',
  styleUrls: ['./overreview.component.css']
})
export class OverreviewComponent implements OnInit {
  dataDepenseGain: any;
  dataClient: any;
   dataParPermis: any;
  constructor(private etatFinancierService: EtatFinanciereService) {
    this.dataDepenseGain = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
        'October', 'November', 'Decenber'],
      datasets: [
        {
          label: 'Gains',
          data: [65, 59, 80, 81, 56, 55, 40, 81, 56, 55, 40, 50],
          fill: false,
          borderColor: '#008000'
        },
        {
          label: 'depenses',
          data: [28, 48, -40, 19, 86, 27, 90, 40, 19, 86, 27, 90],
          fill: false,
          borderColor: '#ff0000',

        }
      ]
    };
    this.dataClient = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
      'October', 'November', 'Decenber'],
      datasets: [
        {
          label: 'Nouveaux client par mois',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: [65, 59, 80, 81, 56, 55, 40, 100, 19, 94, 60, 50]
        }
      ]
    };
    this.dataParPermis = {
      labels: ['A', 'B', 'C'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
          ],
          hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
          ]
        }]
    };
  }

  mois: number;
  year: number;
  cols: any;
  ngOnInit(): void {
    this.mois = (new Date().getMonth() + 1);
    this.year = (new Date().getFullYear());
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


