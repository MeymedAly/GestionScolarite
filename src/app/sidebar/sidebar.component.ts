import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Etudiant } from '../Model/Etudiant';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  etudiant : Etudiant = {ID : 0 ,nom:'', Matricule:'', Classe : ''};
  listEtudiant : any[] = [];
  form = this.formbl.group({ Classe:[] });
  classe:any;

  constructor(protected authService : AuthService, private formbl : FormBuilder, private router : Router, private routes : ActivatedRoute) {
    // const routeParams = this.routes.snapshot.params;
    // console.log(routeParams);

    // this.authService.getEtudiantByClasse(routeParams.id).subscribe((data : any)=>{
    //   console.log(data);
    //   //this.form.patchValue(data);
    // });
   }

  ngOnInit(): void {
    this.getAllEtudiants();
  }
  
  getAllEtudiants(){
    this.authService.getEtudiant().subscribe((data)=> {this.listEtudiant=data.classes;
     console.log(this.listEtudiant);

    }
    );
  }
  // getByClasse(etudiant: Etudiant){
  //   this.classe=this.etudiant.Classe;
  //   this.router.navigate(['AjoutEtudiant/' + this.classe]);
  //   console.log(etudiant);
    
  // }
  // submit(){  
  //   this.etudiant.Classe = this.form.get(['Classe'])!.value;
  //   this.authService.getEtudiantByClasse(this.classe);
  //   console.log(this.etudiant.Classe);
    
  //  }

  ModEtudiant(etudiant: Etudiant){
    this.classe=this.etudiant.Classe;
    this.router.navigate(['AjoutEtudiant/' + this.classe]);
    console.log(etudiant);
    
  }
  consultetudiant(){
    this.etudiant.Matricule = this.form.get(['Matricule'])!.value;
    this.etudiant.Classe = this.form.get(['Classe'])!.value;
    this.authService.getEtudiantByClasse(this.etudiant);
  }
  // filre(){
  //   this.etudiant.Classe = this.form.get(['Classe'])!.value;
  //   this.authService.filtre_byClasse(this.etudiant);
  //   console.log(this.etudiant.Classe);
  // }

  Side(){
    this.authService.side();
  }
  Etude(){
    this.authService.etude();
  }
  cons(){
    this.authService.consult();
  }
  consAd(){
    this.authService.consAdmin();
  }

}
