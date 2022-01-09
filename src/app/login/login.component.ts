import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Etudiant} from '../etudiant';
import {EtudiantService} from '../etudiant.service';
import {Login} from '../login';
import {first} from 'rxjs/operators';
import {MyDialogComponent} from '../my-dialog/my-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {CreateEtudiantComponent} from '../create-etudiant/create-etudiant.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  message: string = 'Vous êtes déconnecté';
 // loginn: Login = new Login(this.username, this.password);
  isLoginFailed = false;
  errorMessage = '';
  retourner = '';

  constructor(public etudiantService: EtudiantService, private router: Router, public dialog: MatDialog) {
  }

  // Informe l'utilisateur sur son authentfication.
  setMessage() {
    this.message = this.isLoginFailed ?
      'Vous êtes connecté.' : 'Identifiant ou mot de passe incorrect.';
  }

   // Connecte l'utilisateur auprès du Guard
 /*  login() {
     this.message = 'Tentative de connexion en cours ...';
     this.etudiantService.login(this.username, this.password).subscribe(() => {
       this.setMessage();
       if (this.etudiantService.isLoggedIn) {
         // Récupère l'URL de redirection depuis le service d'authentification
         // Si aucune redirection n'a été définis, redirige l'utilisateur vers la liste des pokemons.
         let redirect = this.etudiantService.redirectUrl ? this.etudiantService.redirectUrl : '/sujet';
         // Redirige l'utilisate
         this.router.navigate([redirect]);
       } else {
         this.password = '';
       }
     });
   }*/



  login() {

    const formData = new FormData();
    formData.append('email', this.email);
    formData.append('password', this.password);
     this.message = 'Tentative de connexion en cours ...';
     this.etudiantService.loginH(formData).subscribe(() => {
       this.setMessage();
       if (this.etudiantService.isLoggedIn) {
         // Récupère l'URL de redirection depuis le service d'authentification
         // Si aucune redirection n'a été définis, redirige l'utilisateur vers la liste des pokemons.
         let redirect = this.etudiantService.redirectUrl ? this.etudiantService.redirectUrl : '/sujet';
         sessionStorage.setItem('id', this.email);

         // Redirige l'utilisate
         this.router.navigate([redirect]);
       } else {
         this.password = '';
       }
     });
   }



  // Déconnecte l'utilisateur
  logout() {
    this.etudiantService.logout();
    this.setMessage();
  }

createAccount(){
  let dialogRef = this.dialog.open(CreateEtudiantComponent, {});
  dialogRef.afterClosed();
  //this.router.navigate(['/createAccount']);
}


  ngOnInit(): void {
  }


 /* loginn() {
    this.etudiantService.loginEt(this.username, this.password).subscribe(response => {
      this.retourner = response.json();
    });
    if (this.retourner){
      let redirect = this.etudiantService.redirectUrl ? this.etudiantService.redirectUrl : '/sujet';
  }
}*/



/*

  login() {
    this.message = 'Tentative de connexion en cours ...';
    this.etudiantService.login(this.username, this.password).subscribe(() => {
      this.setMessage();
      if (this.etudiantService.isLoggedIn) {
        // Récupère l'URL de redirection depuis le service d'authentification
        // Si aucune redirection n'a été définis, redirige l'utilisateur vers la liste des pokemons.
        let redirect = this.etudiantService.redirectUrl ? this.etudiantService.redirectUrl : '/sujet';
        // Redirige l'utilisate
        this.router.navigate([redirect]);
      } else {
        this.password = '';
      }
    });
  }


*/
}
