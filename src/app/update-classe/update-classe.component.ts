import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Calsse } from '../Model/Classe';

@Component({
  selector: 'app-update-classe',
  templateUrl: './update-classe.component.html',
  styleUrls: ['./update-classe.component.css']
})
export class UpdateClasseComponent implements OnInit {
  classe : Calsse= {nom : '', ID : 0};
  form = this.formbl.group({nom:[],
    ID:[]});

  constructor(private auten : AuthService, private formbl : FormBuilder,private router :Router, private routes : ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.routes.snapshot.params;
    console.log(routeParams);

    this.auten.getClasseById(routeParams.id).subscribe((data : any)=>{
      console.log(data);
      this.form.patchValue(data);
    });

    this.form = this.formbl.group({
      ID : ['', Validators.required],
      nom: ['', Validators.required]
      
    });
  }
  update(){
    this.auten.updateclasses(this.form.value).subscribe(() => {
      this.router.navigate(['AjoutClasse']);
      //window.location.reload();
    })
    console.log("update");
  }

}
