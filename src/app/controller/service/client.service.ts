import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Route, Router} from '@angular/router';
import { fournisseur } from '../model/fournisseur.model';
import { reserver } from '../model/reserver.model';
import { client } from '../model/client.model';
import {PaimentDeClient} from '../model/paiment-de-client.model';
import {HeureConduite} from '../model/heure-conduite.model';
import {ToastrService} from 'ngx-toastr';
import {Employe} from '../model/employe.model';
import {environment} from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class clientService {
  get clientInfo(): client {
    if (this._clientInfo == null) {
      this._clientFound = new client();
    }
    return this._clientInfo;
  }
  set clientInfo(value: client) {
    this._clientInfo = value;
  }
  constructor(private http: HttpClient,
              private router: Router,
              private toast: ToastrService
              ) { }
  get client(): Array<client> {
    if (this._client  ==  null) {
      this._client = new Array<client>();
      this._client.forEach(cli => {
        cli = new client();
      });
    }
    return this._client;
  }

  set client(value: Array<client>) {
    this._client = value;
  }

  get paimentsClient(): Array<PaimentDeClient> {
    if (this._paimentsClient == null) {
      this._paimentsClient = new Array<PaimentDeClient>();
      this._paimentsClient.forEach(pay => {
        pay = new PaimentDeClient();
        pay.client = new client();
      });
    }
    return this._paimentsClient;
  }

  set paimentsClient(value: Array<PaimentDeClient>) {
    this._paimentsClient = value;
  }

  get heureConduites(): Array<HeureConduite> {
    if (this._heureConduites == null) {
      this._heureConduites = new Array<HeureConduite>();
      this._heureConduites.forEach(heure => {
        heure = new HeureConduite();
        heure.client = new client();
      });
    }
    return this._heureConduites;
  }

  set heureConduites(value: Array<HeureConduite>) {
    this._heureConduites = value;
  }

  get clientSearch(): client {
    if (this._clientSearch == null) {
      this._clientSearch = new client();
    }
    return this._clientSearch;
  }

  set clientSearch(value: client) {
    this._clientSearch = value;
  }

  get clientFound(): client {
    if (this._clientFound == null) {
      this._clientFound = new client();
    }
    return this._clientFound;
  }

  set clientFound(value: client) {
    this._clientFound = value;
  }
  get clientAjout(): client {
    if (this._clientAjout == null) {
      this._clientAjout = new client();
    }
    return this._clientAjout;
  }

  set clientAjout(value: client) {
    this._clientAjout = value;
  }

  get clientExam(): Array<client> {
    if (this._clientExam == null) {
      this._clientExam = new Array<client>();
    }
    return this._clientExam;
  }

  set clientExam(value: Array<client>) {
    this._clientExam = value;
  }

  get heureConduiteAjout(): HeureConduite {
    if (this._heureConduiteAjout == null) {
      this._heureConduiteAjout = new HeureConduite();
    }
    return this._heureConduiteAjout;
  }

  set heureConduiteAjout(value: HeureConduite) {
    this._heureConduiteAjout = value;
  }

  get paimentClientAjout(): PaimentDeClient {
    if (this._paimentClientAjout == null) {
      this._paimentClientAjout = new PaimentDeClient();
    }
    return this._paimentClientAjout;
  }

  set paimentClientAjout(value: PaimentDeClient) {
    this._paimentClientAjout = value;
  }

  get retrievedImage(): any {
    return this._retrievedImage;
  }

  set retrievedImage(value: any) {
    this._retrievedImage = value;
  }

  get nombreDeClient1(): number {
    return this._nombreDeClient1;
  }

  set nombreDeClient1(value: number) {
    this._nombreDeClient1 = value;
  }

  get nombreDeClient2(): number {
    return this._nombreDeClient2;
  }

  set nombreDeClient2(value: number) {
    this._nombreDeClient2 = value;
  }

  get nombreDeClient3(): number {
    return this._nombreDeClient3;
  }

  set nombreDeClient3(value: number) {
    this._nombreDeClient3 = value;
  }

  get nombreDeClient4(): number {
    return this._nombreDeClient4;
  }

  set nombreDeClient4(value: number) {
    this._nombreDeClient4 = value;
  }

  get nombreDeClient5(): number {
    return this._nombreDeClient5;
  }

  set nombreDeClient5(value: number) {
    this._nombreDeClient5 = value;
  }

  get nombreDeClient6(): number {
    return this._nombreDeClient6;
  }

  set nombreDeClient6(value: number) {
    this._nombreDeClient6 = value;
  }

  get nombreDeClient7(): number {
    return this._nombreDeClient7;
  }

  set nombreDeClient7(value: number) {
    this._nombreDeClient7 = value;
  }

  get nombreDeClient8(): number {
    return this._nombreDeClient8;
  }

  set nombreDeClient8(value: number) {
    this._nombreDeClient8 = value;
  }

  get nombreDeClient9(): number {
    return this._nombreDeClient9;
  }

  set nombreDeClient9(value: number) {
    this._nombreDeClient9 = value;
  }

  get nombreDeClient10(): number {
    return this._nombreDeClient10;
  }

  set nombreDeClient10(value: number) {
    this._nombreDeClient10 = value;
  }

  get nombreDeClient11(): number {
    return this._nombreDeClient11;
  }

  set nombreDeClient11(value: number) {
    this._nombreDeClient11 = value;
  }

  get nombreDeClient12(): number {
    return this._nombreDeClient12;
  }

  set nombreDeClient12(value: number) {
    this._nombreDeClient12 = value;
  }

  get nombreDeClientA(): number {
    return this._nombreDeClientA;
  }

  set nombreDeClientA(value: number) {
    this._nombreDeClientA = value;
  }

  get nombreDeClientB(): number {
    return this._nombreDeClientB;
  }

  set nombreDeClientB(value: number) {
    this._nombreDeClientB = value;
  }

  get nombreDeClientC(): number {
    return this._nombreDeClientC;
  }

  set nombreDeClientC(value: number) {
    this._nombreDeClientC = value;
  }

  get nombreDeClientD(): number {
    return this._nombreDeClientD;
  }

  set nombreDeClientD(value: number) {
    this._nombreDeClientD = value;
  }
  private _client: Array<client>;
  private _clientSearch: client;
  private _clientFound: client;
  private _clientAjout: client;
  private _clientInfo: client;
  private _clientExam: Array<client>;

  private  options = {
    headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
};
 urlprod = environment.Url;
  private _paimentsClient: Array<PaimentDeClient>;
  private _heureConduites: Array<HeureConduite>;
  private _retrievedImage: any;
  base64Data: any;



  private _heureConduiteAjout: HeureConduite;
  private _paimentClientAjout: PaimentDeClient;

  // nombre de client Par mois
  private _nombreDeClient1: number;

  private _nombreDeClient2: number;

  private _nombreDeClient3: number;

  private _nombreDeClient4: number;

  private _nombreDeClient5: number;

  private _nombreDeClient6: number;

  private _nombreDeClient7: number;

  private _nombreDeClient8: number;

  private _nombreDeClient9: number;

  private _nombreDeClient10: number;
  private _nombreDeClient11: number;

  private _nombreDeClient12: number;

  // nombre des clients par type de permis demandé
  private _nombreDeClientA: number;
  private _nombreDeClientB: number;
  private _nombreDeClientC: number;
  private _nombreDeClientD: number;
  public modiferCeClient(cli: client) {
    this.clientAjout = cli;
  }
public uploadFile(form: FormData) {
  this.http.post<number>(this.urlprod + 'autoEcole-Api/client/uploadFile' , form).subscribe(
    data => {
      if (data != null ) {
        console.log('ha data' + data);
      }
    }, eror => {
      console.log('eroro');
    });
}

  getImage() {
    // Make a call to Sprinf Boot to get the Image Bytes.
   // this.http.get('http://localhost:8081/gestionDesEmployee-Api/TypeDocument/resume/download/' + this.imageName)
   //   .subscribe(
      //  res => {
       //   this.retrieveResonse =  res;
     //     this.base64Data = this.retrieveResonse.data;
       //   this.retrievedImage = 'data:' + this.retrieveResonse.contentType + ';base64,' + this.base64Data;
       // }
      // );
  }
  public save() {
    this.http.post<number>(this.urlprod + 'autoEcole-Api/client/save' , this.clientAjout).subscribe(
      data => {
        if (data != null ) {
          this.toast.success(`client est bien sauvgarder`, 'client sauvgarder', {
            timeOut: 2500,
            progressBar: true,
            progressAnimation: 'increasing',
            positionClass: 'toast-top-right'
          });
          this.findAll();
          console.log('ha data' + data);
          this.clientAjout = null;
        }
      }, eror => {
        console.log('eroro');
      });
  }

  public edit(cli: client) {
  this.http.post<number>(this.urlprod + 'autoEcole-Api/client/edit' , cli).subscribe(
    data => {
      if (data == 1 ) {
        this.toast.info(`client est bien modified`, 'employe modified', {
          timeOut: 2500,
          progressBar: true,
          progressAnimation: 'increasing',
          positionClass: 'toast-top-right'
        });
        console.log('ha data' + data);
        this.clientAjout = null;
      }
    }, eror => {
      console.log('eroro');
    });
}
public genererCodeClient() {
  this.clientAjout.generatedcode = (this.client.length + 1 ) + '/' + new Date().getFullYear();
}
  public findAll() {
    this.http.get<Array<client>>(this.urlprod + 'autoEcole-Api/client/findAll').subscribe(
      data => {
        if (data != null) {
          this.client = data;
          console.log('ha data' + data);
        }
      }, eror => {
        console.log('eroro');
      });
  }
  public findAllclientExamByDate(date: Date) {
    this.http.get<Array<client>>(this.urlprod + 'autoEcole-Api/client/findByDateExamen/date/' + date).subscribe(
      data => {
        if (data != null) {
          this.clientExam = data;
          console.log('ha data' + data);
        }
      }, eror => {
        console.log('eroro');
      });
  }
  public findByDateAujourdHui() {
    this.http.get<Array<client>>(this.urlprod + 'autoEcole-Api/client/findByDateAujourdHui').subscribe(
      data => {
        if (data != null) {
          this.clientExam = data;
          console.log('ha data' + data);
        }
      }, eror => {
        console.log('eroro');
      });
  }
  public findByDateAvant() {
    this.http.get<Array<client>>(this.urlprod + 'autoEcole-Api/client/findByDateAvant').subscribe(
      data => {
        if (data != null) {
          this.clientExam = data;
          console.log('ha data' + data);
        }
      }, eror => {
        console.log('eroro');
      });
  }
  public findByDateSuivant() {
    this.http.get<Array<client>>(this.urlprod + 'autoEcole-Api/client/findByDateSuivant').subscribe(
      data => {
        if (data != null) {
          this.clientExam = data;
          console.log('ha data' + data);
        }
      }, eror => {
        console.log('eroro');
      });
  }

  public exportInformationDuDemandeur(cin: string) {
    this.http.get(this.urlprod + 'autoEcole-Api/client/exportInformationDuDemandeur/cin/' + cin , {
      responseType : 'arraybuffer'}).subscribe(response => this.downLoad(response, 'application/pdf'));
  }
  downLoad(data: any, type: string) {
    const blob = new Blob([data], {type});
    const url = window.URL.createObjectURL(blob);
    const pwa = window.open(url);
    if (!pwa || pwa.closed || typeof pwa.closed === 'undefined') {
      alert( 'Please disable your Pop-up blocker and try again.');
    }
  }
  public exportContrat(cin: string) {
    this.http.get(this.urlprod + 'autoEcole-Api/client/exportContrat/cin/' + cin , {
      responseType : 'arraybuffer'}).subscribe(response => this.downLoad(response, 'application/pdf'));
  }
  public exportAttestationdeformation(cin: string) {
    this.http.get(this.urlprod + 'autoEcole-Api/client/exportAttestationdeformation/cin/' + cin , {
      responseType : 'arraybuffer'}).subscribe(response => this.downLoad(response, 'application/pdf'));
  }
  public exportcertificatMedicalAptitud(cin: string) {
    this.http.get(this.urlprod + 'autoEcole-Api/client/exportcertificatMedicalAptitud/cin/' + cin , {
      responseType : 'arraybuffer'}).subscribe(response => this.downLoad(response, 'application/pdf'));
  }

  public ajouterUnclient() {
    this.http.post<number>(this.urlprod + 'autoEcole-Api/client/createClient', this.clientAjout).subscribe(
      data => {
        if (data == 1) {
          console.log('ha data' + data);
        }
      }, eror => {
        console.log('eroro');
      });
  }
  public refreshClientInfo(id: number) {
    this.http.get<client>(this.urlprod + 'autoEcole-Api/client/findById/' + id).subscribe(
      data => {
        if (data != null ) {
          this.clientInfo = data;
          console.log('ha data' + data);
        }
      }, eror => {
        console.log('eroro');
      });
  }
  public findBYCinClient(cin: string) {
    this.http.get<Array<PaimentDeClient>>(this.urlprod + 'autoEcole-Api/paimentDeClient/findByclientCin/' + cin).subscribe(
      data => {
        if (data != null ) {
          this.paimentsClient = data;
          console.log('ha data' + data);
        }
      }, eror => {
        console.log('eroro');
      });
  }
  public findBYHeureConduiteCinClient(cin: string) {
    this.http.get<Array<HeureConduite>>(this.urlprod + 'autoEcole-Api/heureConduite/findByClientCin/' + cin).subscribe(
      data => {
        if (data != null ) {
          this.heureConduites = data;
          console.log('ha data' + data);
        }
      }, eror => {
        console.log('eroro');
      });
  }
  public saveHeureConduite() {
  this.heureConduiteAjout.client = this.clientInfo;
  this.http.post<number>(this.urlprod + 'autoEcole-Api/heureConduite/save' , this.heureConduiteAjout).subscribe(
      data => {
        if (data != null ) {
          this.toast.info(`heure conduite de client est bien sauvgarder`, 'heure conduite sauvgarder', {
            timeOut: 2500,
            progressBar: true,
            progressAnimation: 'increasing',
            positionClass: 'toast-top-right'
          });
          this.findBYHeureConduiteCinClient(this.clientInfo.cin);
          this.refreshClientInfo(this.clientInfo.id);
          console.log('ha data' + data);
        }
      }, eror => {
        console.log('eroro');
      });
  }
  public savePaimentClient() {
  this.paimentClientAjout.client = this.clientInfo;
  this.http.post<number>(this.urlprod + 'autoEcole-Api/paimentDeClient/save' , this.paimentClientAjout).subscribe(
      data => {
        if (data != null ) {
          this.toast.success(`paiment client est bien sauvgarder`, 'paiment client sauvgarder', {
            timeOut: 2500,
            progressBar: true,
            progressAnimation: 'increasing',
            positionClass: 'toast-top-right'
          });
          this.refreshClientInfo(this.clientInfo.id);
          this.findBYCinClient(this.clientInfo.cin);
          console.log('ha data' + data);
        }
      }, eror => {
        console.log('eroro');
      });
  }

  public copierClientInfo(cli: client) {
    this.base64Data = cli.image;
    this._retrievedImage = 'data:' + cli.imageType + ';base64,' + this.base64Data;
    this.clientInfo = cli;
  }

  public  findAllClientsParMois1AndAnnee(mois: number, annee: number) {
    this.http.get<Array<client>>(this.urlprod + 'autoEcole-Api/client/findAllClientsBymoisAndAnnee/mois/' + mois + '/annee/' + annee).subscribe(
      data => {
        this._nombreDeClient1 = data.length;
        console.log('sucess');
      }, eror => {
        console.log('eroro');
      });
  }

  public  findAllClientsParMois2AndAnnee(mois: number, annee: number) {
    this.http.get<Array<client>>(this.urlprod + 'autoEcole-Api/client/findAllClientsBymoisAndAnnee/mois/' + mois + '/annee/' + annee).subscribe(
      data => {
        this._nombreDeClient2 = data.length;
        console.log('sucess');
      }, eror => {
        console.log('eroro');
      });
  }

  public  findAllClientsParMois3AndAnnee(mois: number, annee: number) {
    this.http.get<Array<client>>(this.urlprod + 'autoEcole-Api/client/findAllClientsBymoisAndAnnee/mois/' + mois + '/annee/' + annee).subscribe(
      data => {
        this._nombreDeClient3 = data.length;
        console.log('sucess');
      }, eror => {
        console.log('eroro');
      });
  }

  public  findAllClientsParMois4AndAnnee(mois: number, annee: number) {
    this.http.get<Array<client>>(this.urlprod + 'autoEcole-Api/client/findAllClientsBymoisAndAnnee/mois/' + mois + '/annee/' + annee).subscribe(
      data => {
        this._nombreDeClient4 = data.length;
        console.log('sucess');
      }, eror => {
        console.log('eroro');
      });
  }

  public  findAllClientsParMois5AndAnnee(mois: number, annee: number) {
    this.http.get<Array<client>>(this.urlprod + 'autoEcole-Api/client/findAllClientsBymoisAndAnnee/mois/' + mois + '/annee/' + annee).subscribe(
      data => {
        this._nombreDeClient5 = data.length;
        console.log('sucess');
      }, eror => {
        console.log('eroro');
      });
  }

  public  findAllClientsParMois6AndAnnee(mois: number, annee: number) {
    this.http.get<Array<client>>(this.urlprod + 'autoEcole-Api/client/findAllClientsBymoisAndAnnee/mois/' + mois + '/annee/' + annee).subscribe(
      data => {
        this._nombreDeClient6 = data.length;
        console.log('sucess');
      }, eror => {
        console.log('eroro');
      });
  }

  public  findAllClientsParMois7AndAnnee(mois: number, annee: number) {
    this.http.get<Array<client>>(this.urlprod + 'autoEcole-Api/client/findAllClientsBymoisAndAnnee/mois/' + mois + '/annee/' + annee).subscribe(
      data => {
        this._nombreDeClient7 = data.length;
        console.log('sucess');
      }, eror => {
        console.log('eroro');
      });
  }

  public  findAllClientsParMois8AndAnnee(mois: number, annee: number) {
    this.http.get<Array<client>>(this.urlprod + 'autoEcole-Api/client/findAllClientsBymoisAndAnnee/mois/' + mois + '/annee/' + annee).subscribe(
      data => {
        this._nombreDeClient8 = data.length;
        console.log('sucess');
      }, eror => {
        console.log('eroro');
      });
  }

  public  findAllClientsParMois9AndAnnee(mois: number, annee: number) {
    this.http.get<Array<client>>(this.urlprod + 'autoEcole-Api/client/findAllClientsBymoisAndAnnee/mois/' + mois + '/annee/' + annee).subscribe(
      data => {
        this._nombreDeClient9 = data.length;
        console.log('sucess');
      }, eror => {
        console.log('eroro');
      });
  }

  public  findAllClientsParMois10AndAnnee(mois: number, annee: number) {
    this.http.get<Array<client>>(this.urlprod + 'autoEcole-Api/client/findAllClientsBymoisAndAnnee/mois/' + mois + '/annee/' + annee).subscribe(
      data => {
        this._nombreDeClient10 = data.length;
        console.log('sucess');
      }, eror => {
        console.log('eroro');
      });
  }

  public  findAllClientsParMois11AndAnnee(mois: number, annee: number) {
    this.http.get<Array<client>>(this.urlprod + 'autoEcole-Api/client/findAllClientsBymoisAndAnnee/mois/' + mois + '/annee/' + annee).subscribe(
      data => {
        this._nombreDeClient11 = data.length;
        console.log('sucess');
      }, eror => {
        console.log('eroro');
      });
  }

  public  findAllClientsParMois12AndAnnee(mois: number, annee: number) {
    this.http.get<Array<client>>(this.urlprod + 'autoEcole-Api/client/findAllClientsBymoisAndAnnee/mois/' + mois + '/annee/' + annee).subscribe(
      data => {
        this._nombreDeClient12 = data.length;
        console.log('sucess');
      }, eror => {
        console.log('eroro');
      });
  }

  public  findByPermisDemandeA(type: string) {
    this.http.get<Array<client>>(this.urlprod + 'autoEcole-Api/client/findByPermisDemande/permisDemande/' + type).subscribe(
      data => {
        this._nombreDeClientA = data.length;
        console.log('sucess');
      }, eror => {
        console.log('eroro');
      });
  }

  public  findByPermisDemandeB(type: string) {
    this.http.get<Array<client>>(this.urlprod + 'autoEcole-Api/client/findByPermisDemande/permisDemande/' + type).subscribe(
      data => {
        this._nombreDeClientB = data.length;
        console.log('sucess');
      }, eror => {
        console.log('eroro');
      });
  }

  public  findByPermisDemandeC(type: string) {
    this.http.get<Array<client>>(this.urlprod + 'autoEcole-Api/client/findByPermisDemande/permisDemande/' + type).subscribe(
      data => {
        this._nombreDeClientC = data.length;
        console.log('sucess');
      }, eror => {
        console.log('eroro');
      });
  }

  public  findByPermisDemandeD(type: string) {
    this.http.get<Array<client>>(this.urlprod + 'autoEcole-Api/client/findByPermisDemande/permisDemande/' + type).subscribe(
      data => {
        this._nombreDeClientD = data.length;
        console.log('sucess');
      }, eror => {
        console.log('eroro');
      });
  }

  public  deleteById(id: number) {
    this.http.delete<number>(this.urlprod + 'autoEcole-Api/client/deleteById/' + id).subscribe(
      data => {
        this.findAll();
        console.log('sucess');
      }, eror => {
        console.log('eroro');
      });
  }
}
