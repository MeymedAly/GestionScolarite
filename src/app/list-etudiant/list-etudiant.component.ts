import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Etudiant } from '../Model/Etudiant';

@Component({
  selector: 'app-list-etudiant',
  templateUrl: './list-etudiant.component.html',
  styleUrls: ['./list-etudiant.component.css']
})
export class ListEtudiantComponent implements OnInit {
  etudiant : Etudiant = {ID:0, nom:'', Matricule:'', Classe : ''};
  listEtudiant : any = {};
  constructor(private auth: AuthService,private router :Router, private routes : ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.routes.queryParams;
    console.log("bv:");
    this.routes.queryParams.subscribe(data=>{
      console.log(data);
      this.listEtudiant=data;
      console.log(this.listEtudiant);
      // this.etudiant.Matricule=data.Matricule;
      // this.etudiant.Classe=data.Classe;
     ;
    });

  }



}

