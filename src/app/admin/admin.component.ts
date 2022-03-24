import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//import { error } from 'console';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { AuthService } from '../auth.service';
import { Admin } from '../Model/Admin';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  angForm = this.fb.group({email:[],
    password:[]});  
  
  constructor(private authService : AuthService, private fb : FormBuilder, private router : Router) {
  
    this.angForm = this.fb.group({
      email :['', Validators.required],
      password : ['', Validators.required]
    });
   }
   

  ngOnInit(): void {  
  }

   postadata(angform : any){
     this.authService.admin(angform.value).pipe(first()).subscribe(
       data => {
         console.log("teste"+data);
       if(data=true){
        const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/side';
          this.router.navigate([redirect]);
          console.log("welcom");
       }else{
          console.log("erreur");
         this.authService.logOut();
       }
      },
      error => {
        alert("voter nom ou mot de passe est incorrect")
      });
    
   }

  submit(form : NgForm){
    // this.authService.admin(form.value).subscribe(
    //   (response:any) => {
    //     if(response==true){
    //       console.log(response + "Ok")
    //       this.authService.login();
    //     }
    //     else{
    //       console.log(response+ "who are u");
    //       this.authService.admin
    //     }
    //   }
    // )

   
    // this.admin.email = this.form.get(['email'])!.value;
    // this.admin.password = this.form.get(['password'])!.value;
    // this.authService.admin(this.admin);
   }
  
  

  logIn(){
    
    this.authService.login()
  }
  
 
}
