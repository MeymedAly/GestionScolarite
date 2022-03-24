import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SingupComponent } from './singup/singup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AjoutClasseComponent } from './ajout-classe/ajout-classe.component';
import { ListClasseComponent } from './list-classe/list-classe.component';
import { AjoutEtudiantComponent } from './ajout-etudiant/ajout-etudiant.component';
import { ListEtudiantComponent } from './list-etudiant/list-etudiant.component';
import { AjoutResultatComponent } from './ajout-resultat/ajout-resultat.component';
import { ConsulterComponent } from './consulter/consulter.component';
import { AdminComponent } from './admin/admin.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeAdminComponent } from './home-admin/home-admin.component';
//import { AjouterClasseComponent } from './ajouter-classe/ajouter-classe.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ConsultAdminComponent } from './consult-admin/consult-admin.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import { UpdateClasseComponent } from './update-classe/update-classe.component';
import { UpdateEtudiantComponent } from './update-etudiant/update-etudiant.component';
import { UpdateResultatComponent } from './update-resultat/update-resultat.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SingupComponent,
    NavbarComponent,
    AjoutClasseComponent,
    ListClasseComponent,
    AjoutEtudiantComponent,
    ListEtudiantComponent,
    AjoutResultatComponent,
    ConsulterComponent,
    AdminComponent,
    EtudiantComponent,
    HomeAdminComponent,
    //AjouterClasseComponent,
    SidebarComponent,
    ConsultAdminComponent,
    UpdateClasseComponent,
    UpdateEtudiantComponent,
    UpdateResultatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
