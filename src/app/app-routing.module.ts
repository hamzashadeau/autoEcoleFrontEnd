import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginSideComponent } from './login-side/login-side.component';
import { HRResponsableSideComponent } from './hr-responsable-side/hr-responsable-side.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AbsenceEtCongeComponent } from './hr-responsable-side/absence-et-conge/absence-et-conge.component';
import { OverreviewComponent } from './hr-responsable-side/overreview/overreview.component';
import { AjoutFournisseurComponent } from './hr-responsable-side/gestion-personnel/ajout-fournisseur.component';


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
       outlet:'un'
      },{
        path: 'abscence',
        component : AbsenceEtCongeComponent,
        outlet:'un'
      },{
        path: 'personnel',
        component : AjoutFournisseurComponent,
        outlet:'un'
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
