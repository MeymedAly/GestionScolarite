import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../auth.service';
import { Resultat } from '../Model/Resultat';

@Component({
  selector: 'app-consult-admin',
  templateUrl: './consult-admin.component.html',
  styleUrls: ['./consult-admin.component.css']
})
export class ConsultAdminComponent implements OnInit {
  resultat : Resultat = {ID:0, classe:'', Matricule:'', Math:0, pc:0, sn:0, ar:0, fr:0, an:0, moy:0};
  listResultat : any[] = [];
  form = this.formbl.group({
   classe:[], Matricule:[], Math:[], pc:[], sn:[], ar:[], fr:[], an:[]
  });
  id:any;

  constructor(private auth :AuthService, private formbl : FormBuilder, private router : Router, private routes : ActivatedRoute) {
    const routeParams = this.routes.snapshot.params;
    console.log(routeParams);

    this.auth.getResultatById(routeParams.id).subscribe((data : any)=>{
      console.log(data);
      //this.form.patchValue(data);
    });
   }

  ngOnInit(): void {
    this.getAllResultat();
  }
  
  listEtude(){
    this.auth.ListEtudiant();
  }

  getAllResultat(){
    this.auth.getResultat().subscribe((data)=> {this.listResultat=data.classes;
     console.log(this.listResultat);

    }
    );
  }

  SuppResultat(resultat : Resultat) : void{
    this.auth.deleteResultat(resultat.ID).subscribe(data => {
      window.location.reload();
      //this.classe = this.classe.filter(u => u !== classe);
    });
  }

  ModResultatt(resultat: Resultat){
    this.id=this.resultat.ID;
    this.router.navigate(['updateResultat/' + this.id]);
    console.log(resultat);
    
  }

  addEtu(){
    Swal.fire("Bravoo",'Les donnes sont modifier','success')
  }


}
