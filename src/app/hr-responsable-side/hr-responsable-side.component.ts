import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hr-responsable-side',
  templateUrl: './hr-responsable-side.component.html',
  styleUrls: ['./hr-responsable-side.component.css']
})
export class HRResponsableSideComponent implements OnInit {
  constructor() {
    this.hideMatBadge = false;
    this.ex = 3;
    this.aujourdHui = new Date();
  }

  aujourdHui: Date;

  opened: boolean;

  panelOpenState = false;
  hideMatBadge: boolean;
  ex: number;

  ngOnInit(): void {

  }


  time = new Date();

  badge() {
    this.hideMatBadge = true;
  }
seDeconnecter(){
  localStorage.removeItem("login");
}

}
