import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginSideComponent } from './login-side/login-side.component';
import { HRResponsableSideComponent } from './hr-responsable-side/hr-responsable-side.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AbsenceEtCongeComponent } from './hr-responsable-side/absence-et-conge/absence-et-conge.component';
import { OverreviewComponent } from './hr-responsable-side/overreview/overreview.component';
import { AjoutFournisseurComponent } from './hr-responsable-side/gestion-personnel/ajout-fournisseur.component';
import {ListesDesEmployeComponent} from "./hr-responsable-side/listes-des-employe/listes-des-employe.component";
import {ListesDesClientsComponent} from "./hr-responsable-side/listes-des-clients/listes-des-clients.component";
import {ListesDesDepensesComponent} from "./hr-responsable-side/listes-des-depenses/listes-des-depenses.component";
import {CalendarDesExamsComponent} from "./hr-responsable-side/calendar-des-exams/calendar-des-exams.component";


const routes: Routes = [
  {
    path: '',
    component: LoginSideComponent
  },
  {
    path: 'RhResponsable',
    component: HRResponsableSideComponent,
    children:[
      {
       path : '',
       component: OverreviewComponent,
       outlet:'un'
      },
      {
       path : 'dash-board',
       component: OverreviewComponent,
       outlet: 'un'
      }, {
        path: 'client',
        component : ListesDesClientsComponent,
        outlet: 'un'
      }, {
        path: 'personnel',
        component : ListesDesEmployeComponent,
        outlet: 'un'
      },
      {
        path: 'etat',
        component : ListesDesDepensesComponent,
        outlet: 'un'
      },
      {
        path: 'calender',
        component : CalendarDesExamsComponent,
        outlet: 'un'
      }
    ]
  }
  ,{
    path: 'logout',
    component : LoginSideComponent,
  },
  {
    path: 'forgetPassword',
    component: ForgotPasswordComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
