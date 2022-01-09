import { Component, OnInit } from '@angular/core';
import {EtudiantService} from '../etudiant.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
  username: string;
  password: string;
  message: string = 'Vous êtes déconnecté';
  isLoginFailed = false;

  constructor(public etudiantService: EtudiantService, private router: Router) {
  }

  // Informe l'utilisateur sur son authentfication.
  setMessage() {
    this.message = this.isLoginFailed ?
      'Vous êtes connecté.' : 'Identifiant ou mot de passe incorrect.';
  }


  login() {
    const formData = new FormData();
    formData.append('username', this.username);
    formData.append('password', this.password);
    this.message = 'Tentative de connexion en cours ...';
    this.etudiantService.loginAdmin(formData).subscribe(() => {
      this.setMessage();
      if (this.etudiantService.isLoggedIn) {
        // Récupère l'URL de redirection depuis le service d'authentification
        // Si aucune redirection n'a été définis, redirige l'utilisateur vers la liste des pokemons.
        let redirect = this.etudiantService.redirectUrl ? this.etudiantService.redirectUrl : '/listSujetAdmin';


        // Redirige l'utilisate
        this.router.navigate([redirect]);
      } else {
        this.password = '';
      }
    });
  }

ngOnInit(): void {
}
  createAccount(){


    this.router.navigate(['/createAccount']);
  }


}
