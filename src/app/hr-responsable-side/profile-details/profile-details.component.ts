import { Component, OnInit } from '@angular/core';
import {UtlisateurService} from "../../controller/service/utlisateur.service";
import {Utlisateur} from '../../controller/model/utlisateur.model';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {

  constructor(private utilisateurService: UtlisateurService) { }

  ngOnInit(): void {
this.utilisateurService.findByLogin(localStorage.getItem("login"));

  }
  get retrievedImage(): any {
    return this.utilisateurService.retrievedImage;
  }
  get utilisateu(): Utlisateur {

    return this.utilisateurService.utilisateu;
  }
}
