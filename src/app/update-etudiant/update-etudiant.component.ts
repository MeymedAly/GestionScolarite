import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Etudiant } from '../Model/Etudiant';

@Component({
  selector: 'app-update-etudiant',
  templateUrl: './update-etudiant.component.html',
  styleUrls: ['./update-etudiant.component.css']
})
export class UpdateEtudiantComponent implements OnInit {
  etudiant : Etudiant = {ID:0,nom:'',Matricule:'', Classe:''};
  form = this.formbl.group({ID:[], nom:[],Matricule:[], Classe:[]
    });

  constructor(private auten : AuthService, private formbl : FormBuilder,private router :Router, private routes : ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.routes.snapshot.params;
    console.log(routeParams);

    this.auten.getEtudiantById(routeParams.id).subscribe((data : any)=>{
      console.log(data);
      this.form.patchValue(data);
    });

    this.form = this.formbl.group({
      ID : ['', Validators.required],
      nom: ['', Validators.required],
      Matricule: ['', Validators.required],
      classe: ['', Validators.required],
      
    });
  }

  update(){
    this.auten.updateEtudiant(this.form.value).subscribe(() => {
      //this.router.navigate(['AjoutEtudiant']);
      //window.location.reload();
    })
    console.log("update");
  }

}
