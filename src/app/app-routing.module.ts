import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AjoutClasseComponent } from './ajout-classe/ajout-classe.component';
import { AjoutEtudiantComponent } from './ajout-etudiant/ajout-etudiant.component';
import { AjoutResultatComponent } from './ajout-resultat/ajout-resultat.component';
import { ConsultAdminComponent } from './consult-admin/consult-admin.component';
import { ConsulterComponent } from './consulter/consulter.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { HomeComponent } from './home/home.component';
import { ListClasseComponent } from './list-classe/list-classe.component';
import { ListEtudiantComponent } from './list-etudiant/list-etudiant.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SingupComponent } from './singup/singup.component';
import { UpdateClasseComponent } from './update-classe/update-classe.component';
import { UpdateEtudiantComponent } from './update-etudiant/update-etudiant.component';
import { UpdateResultatComponent } from './update-resultat/update-resultat.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"Admin", component:AdminComponent},
  {path:"etudiant", component:EtudiantComponent},
  {path:"AjoutClasse", component:AjoutClasseComponent},
  {path:"listClasse", component:ListClasseComponent},
  {path:"AjoutEtudiant", component:AjoutEtudiantComponent},
  {path:"ListEtudiant", component:ListEtudiantComponent},
  {path:"NewResult", component:AjoutResultatComponent},
  {path:"ConsulterResult/:id", component:ConsulterComponent},
  {path:"homeAdmin", component:HomeAdminComponent},
  {path:"Ajoutclasse", component:AjoutClasseComponent},
  {path:"side", component:SidebarComponent},
  {path:"consAdmin", component:ConsultAdminComponent},
  {path:"updateClasse/:id", component:UpdateClasseComponent},
  {path:"updateEtudiant/:id", component:UpdateEtudiantComponent},
  {path:"updateResultat/:id", component:UpdateResultatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
