import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Calsse } from '../Model/Classe';
import { Etudiant } from '../Model/Etudiant';

@Component({
  selector: 'app-ajout-classe',
  templateUrl: './ajout-classe.component.html',
  styleUrls: ['./ajout-classe.component.css']
})
export class AjoutClasseComponent implements OnInit {
  etudiant : Etudiant = {ID : 0 ,nom:'', Matricule:'', Classe : ''};
  listEtudiant : any[] = [];
  form = this.formbl.group({nom:[],
  Matricule:[], Classe:[]});
  id : any;    

  constructor(protected auten : AuthService, private formbl : FormBuilder, private router : Router) {
    
   }
  

   ngOnInit(): void {
    this.getAllclasses();
    //console.log(this.listClass);
    

   }

   get f(){
     return this.form.controls;
   }

  //  submit(){
   
  //   //  console.log(this.form.get(['nom'])!.value);
  //   // console.log(this.form.get(['ID'])!.value);
  //   this.classe.nom = this.form.get(['nom'])!.value;
  //   //this.classe.ID = this.form.get(['ID'])!.value;
  //    this.auten.AjoutClass(this.classe);
  //  }
  submit(){  
    this.etudiant.nom = this.form.get(['nom'])!.value;
    this.etudiant.Matricule = this.form.get(['Matricule'])!.value;
    this.etudiant.Classe = this.form.get(['Classe'])!.value;
    this.auten.AjoutEtudiant(this.etudiant);
    console.log(this.etudiant.Classe);
    
   }

   getAllclasses(){
    //  this.auten.getClasse().subscribe((data)=> {this.listClass=data.classes;
    //   console.log(this.listClass);


    //   for(let a of data.classes){
    //     this.listClass.push(a);
    //   }
    // console.log(this.listClass);

//}
//);  
}

// submit2(){
   
//     //  console.log(this.form.get(['nom'])!.value);
//     // console.log(this.form.get(['ID'])!.value);
//     this.classe.nom = this.form.get(['nom'])!.value;
//     this.classe.ID = this.form.get(['ID'])!.value;
//      this.auten.updateclasses(this.classe);
//    }


// ModClasse(classe: Calsse){
//   this.id=this.classe.ID;
//   this.nom=this.classe.nom;
//   this.router.navigate(['updateClasse/' + this.id]);
//   console.log(classe);
// }

// SuppCllasse(classe :Calsse) : void{
//   this.auten.deleteClass(classe.ID).subscribe(data => {
//     window.location.reload();
//     //this.classe = this.classe.filter(u => u !== classe);
//   });
// }


}
