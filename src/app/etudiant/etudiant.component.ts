import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Etudiant } from '../Model/Etudiant';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {
 // Link='assets/sco.jpeg'
  etudiant : Etudiant = {ID : 0 ,nom:'', Matricule:'', Classe : ''};
  form = this.formbl.group({
    Matricule:[], Classe:[]});

  constructor(protected auten : AuthService, private formbl : FormBuilder, private router : Router) { 

  }

  ngOnInit(): void {
  }
  consultetudiant(){
    this.etudiant.Matricule = this.form.get(['Matricule'])!.value;
    this.etudiant.Classe = this.form.get(['Classe'])!.value;
    this.auten.consuletNote(this.etudiant);

  }

}
