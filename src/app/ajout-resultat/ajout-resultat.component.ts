import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Resultat } from '../Model/Resultat';

@Component({
  selector: 'app-ajout-resultat',
  templateUrl: './ajout-resultat.component.html',
  styleUrls: ['./ajout-resultat.component.css']
})
export class AjoutResultatComponent implements OnInit {
  // resultat : Resultat = {ID:0, classe:'', Matricule:'', Math:0, pc:0, sc:0, ar:0, fr:0, an:0, moy:0.0};
  // form=this.formbl.group({
  //   ID:[], classe:[], Matricule:[], Math:[], pc:[], sc:[], ar:[], fr:[], an:[]
  // });

  constructor(private auth : AuthService, private router :Router, private formbl : FormBuilder) { }

  ngOnInit(): void {
  }

  // submit(){
  //   this.resultat.ID = this.form.get(['ID'])!.value;
  //   this.resultat.classe = this.form.get(['nom'])!.value;
  //   this.resultat.Matricule = this.form.get(['nom'])!.value;
  //   this.resultat.Math = this.form.get(['nom'])!.value;
  //   this.resultat.pc = this.form.get(['nom'])!.value;
  //   this.resultat.sc = this.form.get(['nom'])!.value;
  //   this.resultat.ar = this.form.get(['nom'])!.value;
  //   this.resultat.fr = this.form.get(['nom'])!.value;
  //   this.resultat.an = this.form.get(['nom'])!.value;
  //   this.auth.AjoutResultat(this.resultat);
  //  }

}
