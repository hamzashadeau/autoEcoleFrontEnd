import { Component, OnInit } from '@angular/core';
import {HistoriqueApp} from '../../controller/model/historique-app.model';
import {HistoriqueApplicationService} from '../../controller/service/historique-application.service';
import {UtlisateurService} from "../../controller/service/utlisateur.service";
import {Utlisateur} from "../../controller/model/utlisateur.model";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private historiqueService: HistoriqueApplicationService,
              private utilisateurService: UtlisateurService) { }

  ngOnInit(): void {
    this.historiqueService.findAllHistoriques();
  }
  get utilisateu(): Utlisateur {
    return this.utilisateurService.utilisateu;
  }
  public modifierPassword(){
    this.utilisateurService.resetPassword(this.utilisateu.login, this.utilisateu.oldpassword, this.utilisateu.modDePasse);
  }
  get historiqueList(): Array<HistoriqueApp> {
    return this.historiqueService.historiqueList.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }
}
