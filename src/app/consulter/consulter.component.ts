import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../auth.service';
import { Resultat } from '../Model/Resultat';

@Component({
  selector: 'app-consulter',
  templateUrl: './consulter.component.html',
  styleUrls: ['./consulter.component.css']
})
export class ConsulterComponent implements OnInit {
  resultat : Resultat = {ID:0, classe:'', Matricule:'', Math:0, pc:0, sn:0, ar:0, fr:0, an:0, moy:0};
  form=this.formbl.group({
    ID:[], classe:[], Matricule:[], Math:[], pc:[], sn:[], ar:[], fr:[], an:[]
  });
  id : any;

  constructor(private auth : AuthService, private router :Router, private formbl : FormBuilder, private routes: ActivatedRoute) {

   }

  ngOnInit(): void {
    const routeParams = this.routes.snapshot.params;
    console.log(routeParams);

    this.auth.getClasseById(routeParams.id).subscribe((data : any)=>{
      console.log(data);
      this.form.patchValue(data);
  });
}


  get f(){
    return this.form.controls;
  }

  // submit(){
  //   this.id=this.resultat.ID;
  //   this.router.navigate(['ConsulterResult/' + this.id]);
  //   //this.resultat.ID = this.form.get(['ID'])!.value;
  //  // this.resultat.classe = this.form.get(['classe'])!.value;
  //   this.resultat.Matricule = this.form.get(['Matricule'])!.value;
  //   this.resultat.Math = this.form.get(['Math'])!.value;
  //   this.resultat.pc = this.form.get(['pc'])!.value;
  //   this.resultat.sn = this.form.get(['sn'])!.value;
  //   this.resultat.ar = this.form.get(['ar'])!.value;
  //   this.resultat.fr = this.form.get(['fr'])!.value;
  //   this.resultat.an = this.form.get(['an'])!.value;
  //   this.auth.AjoutResultat(this.resultat);
  //   console.log(this.resultat)
  //  }

   AjoutNote(){
    this.auth.AjoutResultat(this.form.value).subscribe(() => {
      this.resultat.Matricule = this.form.get(['Matricule'])!.value;
      this.resultat.Math = this.form.get(['Math'])!.value;
      this.resultat.pc = this.form.get(['pc'])!.value;
      this.resultat.sn = this.form.get(['sn'])!.value;
      this.resultat.ar = this.form.get(['ar'])!.value;
      this.resultat.fr = this.form.get(['fr'])!.value;
      this.resultat.an = this.form.get(['an'])!.value;
      this.auth.AjoutResultat(this.resultat);
      //this.router.navigate(['AjoutClasse']);
      //window.location.reload();
    })
    
    console.log("Note ajouter");
  }
  addEtu(){
    Swal.fire("Bravoo",'Les donnes sont enregistre','success')
  }




}
