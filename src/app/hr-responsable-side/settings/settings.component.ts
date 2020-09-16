import { Component, OnInit } from '@angular/core';
import {HistoriqueApp} from '../../controller/model/historique-app.model';
import {HistoriqueApplicationService} from '../../controller/service/historique-application.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private historiqueService : HistoriqueApplicationService) { }

  ngOnInit(): void {
    this.historiqueService.findAllHistoriques();
  }
  get historiqueList(): Array<HistoriqueApp> {

    return this.historiqueService.historiqueList.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }
}
