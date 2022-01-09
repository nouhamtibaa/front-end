import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {EtudiantService} from './etudiant.service';

@Injectable({
  providedIn: 'root'
})
export class AuthAdminService implements CanActivate {

  constructor( private etudiantService: EtudiantService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if (this.etudiantService.isLoggedIn) { return true; }
    this.etudiantService.redirectUrl = url;
    this.router.navigate(['/loginAdmin']);

    return false;
  }
}
