import { Component, OnInit } from '@angular/core';
import { reservationService } from 'src/app/controller/service/reservation.service';
import { reserver } from 'src/app/controller/model/reserver.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-ajout-reservation',
  templateUrl: './ajout-reservation.component.html',
  styleUrls: ['./ajout-reservation.component.css']
})
export class AjoutReservationComponent implements OnInit {
  public date: moment.Moment;
  public disabled = false;
  public showSpinners = true;
  public showSeconds = false;
  public touchUi = false;
  public enableMeridian = false;
  public minDate: moment.Moment;
  public maxDate: moment.Moment;
  public stepHour = 1;
  public stepMinute = 1;
  public stepSecond = 1;
  constructor(private reservationService: reservationService,
              private fb: FormBuilder) { }
     
  ngOnInit(): void { }
public ajouterReservation(): any{
  this.reservationService.ajouterUneResrvation();
}
get reserverAjout(): reserver {
  return this.reservationService.reserverAjout;
}
}
