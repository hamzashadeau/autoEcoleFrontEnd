import { Component, OnInit } from '@angular/core';
import {clientService} from '../../controller/service/client.service';
import {client} from "../../controller/model/client.model";

@Component({
  selector: 'app-calendar-des-exams',
  templateUrl: './calendar-des-exams.component.html',
  styleUrls: ['./calendar-des-exams.component.css']
})
export class CalendarDesExamsComponent implements OnInit {

  constructor(private clientService: clientService) { }
  get clientExam(): Array<client> {
    return this.clientService.clientExam;
  }
  cols: any;
  Aujourdhui: Date;
  ngOnInit(): void {
    this.Aujourdhui = new Date();
    this.clientService.findByDateAujourdHui();
   // this.clientService.findAllclientExamByDate(this.Aujourdhui);
    this.cols = [
      { field: 'nomFR', header: 'Nom FR' },
      { field: 'prenomFR', header: 'prenom FR' },
      { field: 'addresseFR', header: 'adresse FR' },
      { field: 'cin', header: 'Cin' },
      { field: 'dateExamen', header: 'date Exam' },
    ];
  }
  date: Date;
chercheParDate(){
    this.clientService.findAllclientExamByDate(this.date);
}
getDatesuivant(){
  this.clientService.findByDateSuivant();
}
  getDateprecedent(){
    this.clientService.findByDateAvant();
  }
}
