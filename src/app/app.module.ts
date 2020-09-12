/**Angular Core Imports **/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

/**Angular Material Imports **/
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatTreeModule } from '@angular/material/tree';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import {MatDividerModule} from '@angular/material/divider';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef} from "@angular/material/dialog";

/* Autres  */
import {FileUploadModule, TableModule} from 'primeng';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule, NgxMatCalendar } from 'ngx-mat-datetime-picker';
import {TabViewModule} from 'primeng/tabview';
import {FieldsetModule} from 'primeng/fieldset';
/** Components **/
import { AppComponent } from './app.component';
import { LoginSideComponent } from './login-side/login-side.component';
import { FooterDeLoginComponent } from './footer-de-login/footer-de-login.component';
import { HRResponsableSideComponent } from './hr-responsable-side/hr-responsable-side.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { OverreviewComponent } from './hr-responsable-side/overreview/overreview.component';
import { AbsenceEtCongeComponent } from './hr-responsable-side/absence-et-conge/absence-et-conge.component';
import { AjoutFournisseurComponent } from './hr-responsable-side/gestion-personnel/ajout-fournisseur.component';

import { AjouterClientComponent } from './hr-responsable-side/absence-et-conge/ajouter-client/ajouter-client.component';
import { DetailsEmployesComponent } from './hr-responsable-side/gestion-personnel/details-employes/details-employes.component';
import { ListesDesEmployeComponent } from './hr-responsable-side/listes-des-employe/listes-des-employe.component';
import { ListesDesClientsComponent } from './hr-responsable-side/listes-des-clients/listes-des-clients.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSelectFilterModule} from "mat-select-filter";
import { ClientDetailComponent } from './hr-responsable-side/listes-des-Clients/client-detail/client-detail.component';
import { ListesDesDepensesComponent } from './hr-responsable-side/listes-des-depenses/listes-des-depenses.component';
import { ListesDesGainsComponent } from './hr-responsable-side/listes-des-gains/listes-des-gains.component';
import { AjouterDesDespencesGainsComponent } from './hr-responsable-side/ajouter-des-despences/ajouter-des-despences-gains.component';
import { CalendarDesExamsComponent } from './hr-responsable-side/calendar-des-exams/calendar-des-exams.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginSideComponent,
    FooterDeLoginComponent,
    HRResponsableSideComponent,
    TopBarComponent,
    ForgotPasswordComponent,
    OverreviewComponent,
    AbsenceEtCongeComponent,
    AjoutFournisseurComponent,
    AjouterClientComponent,
    DetailsEmployesComponent,
    ListesDesEmployeComponent,
    ListesDesClientsComponent,
    ClientDetailComponent,
    ListesDesDepensesComponent,
    ListesDesGainsComponent,
    AjouterDesDespencesGainsComponent,
    CalendarDesExamsComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSidenavModule,
    MatSelectModule,
    MatSelectFilterModule,
    MatFormFieldModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    MatBadgeModule
    , MatButtonModule,
    MatTreeModule,
    MatProgressBarModule,
    MatListModule,
    MatNativeDateModule,
    MatDialogModule,
    MatTabsModule
    , MatDividerModule
    , MatTooltipModule,
    MatExpansionModule, MatDatepickerModule,
     FileUploadModule,
     MatRadioModule,
     MatCardModule,
     TabViewModule,
     FieldsetModule,
     TableModule, MatStepperModule
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}


    },
    {
      provide: MAT_DIALOG_DATA,
      useValue: {}
    },
    MatDatepickerModule
  ],
  bootstrap: [AppComponent],
  entryComponents: [AjoutFournisseurComponent]

})
export class AppModule { }
