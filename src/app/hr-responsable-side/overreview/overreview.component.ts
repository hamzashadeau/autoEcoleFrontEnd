import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { reserver } from 'src/app/controller/model/reserver.model';
import { reservationService } from 'src/app/controller/service/reservation.service';
import {EtatFinanciereService} from '../../controller/service/etat-financiere.service';
import {clientService} from "../../controller/service/client.service";


@Component({
  selector: 'app-overreview',
  templateUrl: './overreview.component.html',
  styleUrls: ['./overreview.component.css']
})
export class OverreviewComponent implements OnInit {
  dataDepenseGain: any;
  dataClient: any;
   dataParPermis: any;
  constructor(private etatFinancierService: EtatFinanciereService,
              private clientService: clientService) {
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
    console.log(this.nombreDeClient1);
    console.log(this.nombreDeClient2);
    console.log(this.nombreDeClient3);
    console.log(this.nombreDeClient4);
    console.log(this.nombreDeClient5);
    console.log(this.nombreDeClient6);
    console.log(this.nombreDeClient7);
    console.log(this.nombreDeClient8);
    console.log(this.nombreDeClient9);
    console.log(this.nombreDeClient10);
    console.log(this.nombreDeClient11);
    console.log(this.nombreDeClient12);

    console.log(this.nombreGains1);
    console.log(this.nombreGains2);
    console.log(this.nombreGains3);
    console.log(this.nombreGains4);
    console.log(this.nombreGains5);
    console.log(this.nombreGains6);
    console.log(this.nombreGains7);
    console.log(this.nombreGains8);
    console.log(this.nombreGains9);
    console.log(this.nombreGains10);
    console.log(this.nombreGains11);
    console.log(this.nombreGains12);

    console.log(this.nombreDespence1);
    console.log(this.nombreDespence2);
    console.log(this.nombreDespence3);
    console.log(this.nombreDespence4);
    console.log(this.nombreDespence5);
    console.log(this.nombreDespence6);
    console.log(this.nombreDespence7);
    console.log(this.nombreDespence8);
    console.log(this.nombreDespence9);
    console.log(this.nombreDespence10);
    console.log(this.nombreDespence11);
    console.log(this.nombreDespence12);


    console.log(this.nombreDeClientA);
    console.log(this.nombreDeClientB);
    console.log(this.nombreDeClientC);
    console.log(this.nombreDeClientD);
  }

  // public ajouterReservation() {
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.disableClose = true;
  //   dialogConfig.autoFocus = true;
  //   dialogConfig.width = '90%';
  //   dialogConfig.height = '80%';
  //   this.dialog.open(AjoutReservationComponent,dialogConfig);
  // }

  get nombreDeClient1(): number {
    return this.clientService.nombreDeClient1;
  }
  get nombreDeClient2(): number {
    return this.clientService.nombreDeClient2;
  }
  get nombreDeClient3(): number {
    return this.clientService.nombreDeClient3;
  }
  get nombreDeClient4(): number {
    return this.clientService.nombreDeClient4;
  }
  get nombreDeClient5(): number {
    return this.clientService.nombreDeClient5;
  }
  get nombreDeClient6(): number {
    return this.clientService.nombreDeClient6;
  }
  get nombreDeClient7(): number {
    return this.clientService.nombreDeClient7;
  }
  get nombreDeClient8(): number {
    return this.clientService.nombreDeClient8;
  }
  get nombreDeClient9(): number {
    return this.clientService.nombreDeClient9;
  }
  get nombreDeClient10(): number {
    return this.clientService.nombreDeClient10;
  }
  get nombreDeClient11(): number {
    return this.clientService.nombreDeClient11;
  }
  get nombreDeClient12(): number {
    return this.clientService.nombreDeClient12;
  }

  get nombreDespence12(): number {
    return this.etatFinancierService.nombreDespence12;
  }
  get nombreDespence11(): number {
    return this.etatFinancierService.nombreDespence11;
  }
  get nombreDespence10(): number {
    return this.etatFinancierService.nombreDespence11;
  }
  get nombreDespence9(): number {
    return this.etatFinancierService.nombreDespence9;
  }
  get nombreDespence8(): number {
    return this.etatFinancierService.nombreDespence8;
  }
  get nombreDespence7(): number {
    return this.etatFinancierService.nombreDespence7;
  }
  get nombreDespence6(): number {
    return this.etatFinancierService.nombreDespence6;
  }
  get nombreDespence5(): number {
    return this.etatFinancierService.nombreDespence5;
  }
  get nombreDespence4(): number {
    return this.etatFinancierService.nombreDespence4;
  }
  get nombreDespence3(): number {
    return this.etatFinancierService.nombreDespence3;
  }
  get nombreDespence2(): number {
    return this.etatFinancierService.nombreDespence2;
  }
  get nombreDespence1(): number {
    return this.etatFinancierService.nombreDespence1;
  }

  get nombreGains1(): number {
    return this.etatFinancierService.nombreGains1;
  }
  get nombreGains2(): number {
    return this.etatFinancierService.nombreGains2;
  }
  get nombreGains3(): number {
    return this.etatFinancierService.nombreGains3;
  }
  get nombreGains4(): number {
    return this.etatFinancierService.nombreGains4;
  }
  get nombreGains5(): number {
    return this.etatFinancierService.nombreGains5;
  }
  get nombreGains6(): number {
    return this.etatFinancierService.nombreGains6;
  }
  get nombreGains7(): number {
    return this.etatFinancierService.nombreGains7;
  }
  get nombreGains8(): number {
    return this.etatFinancierService.nombreGains8;
  }
  get nombreGains9(): number {
    return this.etatFinancierService.nombreGains9;
  }
  get nombreGains10(): number {
    return this.etatFinancierService.nombreGains10;
  }
  get nombreGains11(): number {
    return this.etatFinancierService.nombreGains11;
  }
  get nombreGains12(): number {
    return this.etatFinancierService.nombreGains12;
  }
  get nombreDeClientA(): number {
    return this.clientService.nombreDeClientA;
  }get nombreDeClientB(): number {
    return this.clientService.nombreDeClientB;
  }get nombreDeClientC(): number {
    return this.clientService.nombreDeClientC;
  }get nombreDeClientD(): number {
    return this.clientService.nombreDeClientD;
  }
  }


