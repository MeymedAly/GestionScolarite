import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../auth.service';
import { EtudiantComponent } from '../etudiant/etudiant.component';
import { Etudiant } from '../Model/Etudiant';

@Component({
  selector: 'app-ajout-etudiant',
  templateUrl: './ajout-etudiant.component.html',
  styleUrls: ['./ajout-etudiant.component.css']
})
export class AjoutEtudiantComponent implements OnInit {
  etudiant : Etudiant = {ID : 0 ,nom:'', Matricule:'', Classe : ''};
  listEtudiant : any[]=[];
  
  form = this.formbl.group({nom:[],
  Matricule:[], Classe:[]});
  id : any;
  

  constructor(private auth : AuthService, private formbl : FormBuilder, private router : Router, private routes : ActivatedRoute) {
    // const routeParams = this.routes.snapshot.params;
    // console.log(routeParams);

    // this.auth.getEtudiantById(routeParams.id).subscribe((data : any)=>{
    //   console.log(data);
    //   this.listEtudiant=data;
    // });

   }

  ngOnInit(): void {
     this.getAllEtudiants();
    // const routeParams = this.routes.queryParams;
    //  console.log("bv:");
    // this.routes.queryParams.subscribe(data=>{
    //    console.log(data.classes[0]);
    //   // this.listEtudiant.push(data.classes);
    //   //data;
    //   //console.log("list "+this.listEtudiant[0]);
    // //   // this.etudiant.Matricule=data.Matricule;
    // //   // this.etudiant.Classe=data.Classe;
    // //  ;
    //  });
  }

  getAllEtudiants(){
    this.auth.getEtudiant().subscribe((data)=> {this.listEtudiant=data.classes;
     console.log(this.listEtudiant);

    }
    );
  }

  addEtudiant(f : NgForm){
    this.etudiant.nom = this.form.get(['nom'])!.value;
     this.etudiant.Matricule = this.form.get(['Matricule'])!.value;
     this.etudiant.Classe = this.form.get(['Classes'])!.value;
    this.auth.AjoutEtudiant(this.etudiant);
  }



  submit(){  
    this.etudiant.nom = this.form.get(['nom'])!.value;
    this.etudiant.Matricule = this.form.get(['Matricule'])!.value;
    this.etudiant.Classe = this.form.get(['Classe'])!.value;
    this.auth.AjoutEtudiant(this.etudiant);
    console.log(this.etudiant.Classe);
    
   }

   ModEtudiant(etudiant: Etudiant){
    this.id=this.etudiant.ID;
    this.router.navigate(['updateEtudiant/' + this.id]);
    console.log(etudiant);
    
  }
 sup(){

  Swal.fire({
    title: 'Voulez-vous vraiment supprimer ?',
    text: 'Vous ne pourrez pas récupérer ce fichier !',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Oui, supprimez-le !',
    cancelButtonText: 'Non, gardez-le',
  }).then((result) => {
    if (result.value) {
      Swal.fire(
        'Supprimé !',
        'Votre fichier imaginaire a été supprimé.',
        'success'
      );
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire('Annulé', 'Votre fichier imaginaire est en sécurité :', 'error');
    }
  });
 }
  
  // SuppEtudiant(etudiant :Etudiant) : void{
  //   this.auth.deleteEtudiant(etudiant.ID).subscribe(data => {
  //     window.location.reload();
  //     //this.classe = this.classe.filter(u => u !== classe);
  //   });
  // }

  cons(){
    this.auth.consult();
  }

  AjoutResultat(etudiant: Etudiant){
    this.id=this.etudiant.ID;
    this.router.navigate(['ConsulterResult/' + this.id]);
    console.log(etudiant);
    
  
  }
  addEtu(){
    Swal.fire("Bravoo",'Les donnes sont enregistrer','success')
  }
  modiEtu(){
    Swal.fire("Bravoo",'Les donnes sont modifier','success')
  }

}
