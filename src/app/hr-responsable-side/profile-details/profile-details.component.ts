import { Component, OnInit } from '@angular/core';
import {UtlisateurService} from "../../controller/service/utlisateur.service";

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {

  constructor(private utilisateurService: UtlisateurService) { }

  ngOnInit(): void {
  }
  get retrievedImage(): any {
    return this.utilisateurService.retrievedImage;
  }
}
