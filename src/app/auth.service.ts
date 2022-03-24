import { Injectable, Output } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Calsse } from './Model/Classe';
import { Etudiant } from './Model/Etudiant';
import { map } from 'rxjs/operators';
import { Admin } from './Model/Admin';
import { Resultat } from './Model/Resultat';
//import { EventEmitter } from 'stream';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  ClasseData : any;
  redirectUrl : String ='';
  classes : Calsse[] = [{ ID : 0 ,nom : '' }];
  list:any[]=[];
  //@Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  //classes = Calsse;
  
  constructor(private http : HttpClient, private router : Router) {
      //this.classes;
   }

  public admin(admin : Admin){
    console.log(admin);
    return this.http.post('http://localhost/gestionNote/listP.php', JSON.stringify(admin),{})
  }
   

  public getClasse(): Observable<any>{
    return this.http.get('http://localhost/gestionNote/get_classe_details.php');
  } 
  public getEtudiant(): Observable<any>{
    return this.http.get('http://localhost/gestionNote/get_etudiant_details.php');
  }
  
  public AjoutClass(classes : Calsse){
    return this.http.post('http://localhost/gestionNote/creer_classe.php', classes, { }).subscribe(response => {
      console.log(response);
      this.router.navigateByUrl("Ajoutclasse");
      alert("l'ajout est reussi")
  });    
  }

  public AjoutEtudiant(etudiant : Etudiant){
    return this.http.post('http://localhost/gestionNote/Creer_Etudiant.php',  etudiant, { }).subscribe(response => {
      //window.location.reload();
      console.log(response);
      alert("Etudiant est ajouter !");
      
  });
    
  }

  public updateclasses(classe : Calsse){
    console.log(JSON.stringify(classe));
   // this.router.navigateByUrl("Ajoutclasse");
    return this.http.put('http://localhost/gestionNote/updateClasse.php?ID=' + classe.ID, JSON.stringify(classe) );
    
  }
  getClasseById(ID : number){
    return this.http.get<Calsse[]>('http://localhost/gestionNote/get_classe_byId.php?ID=' + ID);
  }
deleteClass(id:number){
  //console.log("delet");
  this.router.navigateByUrl("Ajoutclasse");
  return this.http.delete('http://localhost/gestionNote/deletClasse.php/?ID=' + id);
  
}

deleteEtudiant(id:number){
  console.log("delet");
  
  return this.http.delete('http://localhost/gestionNote/deletEtudiant.php/?ID=' + id);
  }

  getEtudiantById(ID : number){
    return this.http.get<Etudiant[]>('http://localhost/gestionNote/get_etudiant_byId.php/?ID=' + ID);

  }
  updateEtudiant(etudiant : Etudiant){
    return this.http.put('http://localhost/gestionNote/UpdateEtudiant.php/?ID=' + etudiant.ID, JSON.stringify(etudiant));
  }

  AjoutResultat(resultat : Resultat){
    return this.http.post('http://localhost/gestionNote/result.php',  resultat, { });
}

getResultat() : Observable<any>{
  return this.http.get('http://localhost/gestionNote/get_resultat_detail.php');
}
deleteResultat(id:number){
  return this.http.delete('http://localhost/gestionNote/deletResultat.php/?ID=' + id);
}
getResultatById(ID:number){
  return this.http.get<Resultat[]>('http://localhost/gestionNote/get_resultat_byId.php/?ID=' + ID);
}

UpdateResultat(resultat : Resultat){
  return this.http.put('http://localhost/gestionNote/update_resultat.php/?ID=' + resultat.ID, JSON.stringify(resultat));

}
getEtudiantByClasse(etudiant : Etudiant){
  return this.http.post('http://localhost/gestionNote/get_etudiant_byClasse.php' , etudiant, {}).subscribe(
    data => {
      console.log(data);
      this.router.navigate(['ListEtudiant/'], {queryParams:data})
    }
  );

}
consuletNote(etudiant:Etudiant){
  return this.http.post('http://localhost/gestionNote/get_etudiant_byClasse.php',JSON.stringify(etudiant), { }).subscribe(
    data => {
      console.log(data);
      //const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/side';
     /// this.router.navigate(['ListEtudiant/'+]);
     this.router.navigate(['ListEtudiant/'],{queryParams:data});
    
      });
}
// filtre_byClasse(etudiant:Etudiant) {
//   return this.http.post('http://localhost/gestionNote/filre_Etudiant_byClasse.php',JSON.stringify(etudiant), { }).subscribe(
//     data => {
//       console.log(data);
//      //this.list.push(data);
//      console.log(this.list);
//      this.router.navigate(['AjoutEtudiant/'],{queryParams:data});
    
//       });
// }
// public filtre(etudiant:Etudiant){
//  // console.log(admin);
//   return this.http.post('http://localhost/gestionNote/filre_Etudiant_byClasse.php',JSON.stringify(etudiant),{});
// }


  login(){
    this.router.navigateByUrl("side")
  } 
  logOut(){
    this.router.navigateByUrl("Admin")
  }
  side(){
    this.router.navigateByUrl("AjoutClasse")
  }
  etude(){
    this.router.navigateByUrl("AjoutEtudiant")
  } 
  consult(){
    this.router.navigateByUrl("ConsulterResult")
  }
  consAdmin(){
    this.router.navigateByUrl("consAdmin");
  }
  UpdateClasse(){
    this.router.navigateByUrl("updateClasse");
  }
  ListEtudiant(){
    this.router.navigateByUrl("ListEtudiant");
  }
}
