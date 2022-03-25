import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../auth.service';
import { Resultat } from '../Model/Resultat';

@Component({
  selector: 'app-update-resultat',
  templateUrl: './update-resultat.component.html',
  styleUrls: ['./update-resultat.component.css']
})
export class UpdateResultatComponent implements OnInit {
  resultat : Resultat = {ID:0, classe:'', Matricule:'', Math:0, pc:0, sn:0, ar:0, fr:0, an:0, moy:0};
  form = this.formbl.group({
   classe:[], Matricule:[], Math:[], pc:[], sn:[], ar:[], fr:[], an:[]
  });
  id:any;

  constructor(private auth :AuthService, private formbl : FormBuilder, private router : Router, private routes : ActivatedRoute) {
    const routeParams = this.routes.snapshot.params;
    console.log(routeParams);

    this.auth.getResultatById(routeParams.id).subscribe((data : any)=>{
      console.log(data);
      this.form.patchValue(data);
    });

    this.form = this.formbl.group({
      ID : ['', Validators.required],
      classe : ['', Validators.required],
      nom: ['', Validators.required],
      Matricule: ['', Validators.required],
      Math: ['', Validators.required],
      pc: ['', Validators.required],
      sn: ['', Validators.required],
      ar: ['', Validators.required],
      fr: ['', Validators.required],
      an: ['', Validators.required],
    });
   }

  ngOnInit(): void {
  }

  update(){
    this.auth.UpdateResultat(this.form.value).subscribe(() => {
      this.router.navigate(['consAdmin']);
      //window.location.reload();
    })
    console.log("update");
  }
  addEtu(){
    Swal.fire("Bravoo",'Les donnes sont enregistre','success')
  }

}
