import { Component, OnInit } from '@angular/core';
import {clientService} from '../../controller/service/client.service';
import {client} from '../../controller/model/client.model';
import {PaimentDeClient} from '../../controller/model/paiment-de-client.model';
import {HeureConduite} from '../../controller/model/heure-conduite.model';

@Component({
  selector: 'app-absence-et-conge',
  templateUrl: './absence-et-conge.component.html',
  styleUrls: ['./absence-et-conge.component.css']
})
export class AbsenceEtCongeComponent implements OnInit {
  constructor(private ClientService: clientService) { }
  get clientInfo(): client {
    return this.ClientService.clientInfo;
  }
  get retrievedImage(): any {
    return this.ClientService.retrievedImage;
  }
  get paimentsClient(): Array<PaimentDeClient> {
    return this.ClientService.paimentsClient;
  }
  modifierClient(){
    this.ClientService.edit(this.clientInfo);
    this.ClientService.refreshClientInfo(this.clientInfo.id);
  }
  cols: any;
  cols1: any;
  ngOnInit(): void {
    // this.ClientService.findBYHeureConduiteCinClient(this.clientInfo.cin);
    // this.ClientService.findBYCinClient(this.clientInfo.cin);
    this.cols = [
      { field: 'duree', header: 'Durée de la séeance'},
      { field: 'date', header: 'Date de la séance'},
    ];
    this.cols1 = [
      { field: 'montantpaye', header: 'montant payé'},
      { field: 'date', header: 'Date de paiment'},
    ];
    this.ClientService.findBYCinClient(this.clientInfo.cin);
    this.ClientService.findBYHeureConduiteCinClient(this.clientInfo.cin);
  }
  get heureConduites(): Array<HeureConduite> {
    return this.ClientService.heureConduites;
  }

  get heureConduiteAjout(): HeureConduite {
    return this.ClientService.heureConduiteAjout;
  }

  get paimentClientAjout(): PaimentDeClient {
    return this.ClientService.paimentClientAjout;
  }
  public ajouterHeureConduite(){
    this.ClientService.saveHeureConduite();
  }
  public ajouterPaimentClient(){
    this.ClientService.savePaimentClient();
  }
  public imprimerInformationSurledemandeur(){
    this.ClientService.exportInformationDuDemandeur(this.clientInfo.cin);
  }
  public imprimerAttestationdeformation(){
    this.ClientService.exportAttestationdeformation(this.clientInfo.cin);
  }
  public imprimercertificatMedicalAptitud(){
    this.ClientService.exportcertificatMedicalAptitud(this.clientInfo.cin);
  }
  public imprimerContrat(){
    this.ClientService.exportContrat(this.clientInfo.cin);
  }
}
