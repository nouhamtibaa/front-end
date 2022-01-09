import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {delay, tap} from 'rxjs/operators';
import {Login} from './login';
import {Router} from '@angular/router';
import {EmailMessage} from './emailMessage';
import {MatDialog} from '@angular/material/dialog';
import {MyDialogComponent} from './my-dialog/my-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  private baseUrl = 'http://localhost:8080/api/v1/sujets';
  private baseUrl2 = 'http://localhost:8080/api/v1/verif';
  private baseUrl3 = 'http://localhost:8080/api/v1/uploadEt';
  private baseUrl14 = 'http://localhost:8080/api/v1/updateEtudiant';
  private baseUrl4 = 'http://localhost:8080/api/v1/get';
  private baseUrl5 = 'http://localhost:8080/api/v1/addSujet';
  private baseUrl6 = 'http://localhost:8080/api/v1/sujetSupp';
  private baseUrl7 = 'http://localhost:8080/api/v1/updateEt';
  private baseUrl8 = 'http://localhost:8080/api/v1/postuler';
  private baseUrl9 = 'http://localhost:8080/api/v1/conv';
  private baseUrl10 = 'http://localhost:8080/api/v1/sendEmail';
  private baseUrl11 = 'http://localhost:8080/api/v1/verifAdmin';
  private baseUrl12 = 'http://localhost:8080/api/v1/verifMail';
  private baseUrl13 = 'http://localhost:8080/api/v1/api';
  private baseUrl15 = 'http://localhost:8080/api/v1/getEtudiantByEmail';

  isLoggedIn: boolean; // L'utilisateur est-il connecté ?
  isEmail: boolean;
  redirectUrl: string; // où rediriger l'utilisateur après l'authentification ?
  // Une méthode de connexion

  constructor(private http: HttpClient, private router: Router, private dialog: MatDialog) {
  }


  getSujetsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getSujetsListById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  /*

    createEtudiant(): Observable<any> {
      return this.http.post(`${this.baseUrl3}`, FormData);
    }
  */

  getEtudiantById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl13}/${id}`);
  }


  getCVEtudiant(id: number): Observable<Blob> {
    return this.http.get(`${this.baseUrl4}/${id}`, {responseType: 'blob'});
  }

  /* getCV (id : number): Observable<Blob> {
     return this.http.get(`${this.baseUrl4}`, {responseType: 'blob'});
   }*/

  loginH(formdata: FormData): Observable<boolean> {
    // Faites votre appel à un service d'authentification...
    this.http.post<FormData>(`${this.baseUrl2}`, formdata).subscribe(res => this.isLoggedIn = true,
      (err) => console.log(err)
    );

    return of(true).pipe(
      delay(1000),
      tap(val => this.isLoggedIn = this.isLoggedIn)
    );
  }


  /*
   login(nom: string, password: string): Observable<boolean> {
      // Faites votre appel à un service d'authentification...
      let isLoggedIn = (name === 'admin' && password === 'admin');

      return of(true).pipe(
        delay(1000),
        tap(val => this.isLoggedIn = isLoggedIn)
      );
    }
  */

  // Une méthode de déconnexion
  logout(): void {
    this.isLoggedIn = false;
  }

  addSujet(sujet: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl5}`, sujet);
  }


  deleteSujet(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl6}/${id}`, {responseType: 'text'});
  }

  updateSujet(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl7}/${id}`, value);
  }

  updateEtudiant(id: number, value:any): Observable<any> {
    return this.http.put(`${this.baseUrl14}/${id}`, value);
  }

  /*
    loginEt(nom: String, password: String ):Observable<any> {

       return  this.http.post(`${this.baseUrl2}`, [nom, password]);

     }

   */

  verifMail(formdata: FormData): Observable<boolean> {
    this.http.post<FormData>(`${this.baseUrl12}`, formdata).subscribe(res => this.isEmail = true,
      (err) => console.log(err)
    );

    return of(true).pipe(
      delay(1000),
      tap(val => this.isEmail = this.isEmail)
    );
  }


  postuler( formData: FormData): Observable<any> {
    return this.http.post(`${this.baseUrl8}`, formData);
  }

  sendEmail(emailMessage: EmailMessage): Observable<any>{
    return this.http.post(`${this.baseUrl10}`, emailMessage);
  }

  getConv(formData: FormData, id: number): Observable<any> {
    return this.http.get(`${this.baseUrl9}`, );
  }


  loginAdmin(formdata: FormData): Observable<boolean> {
    // Faites votre appel à un service d'authentification...
    this.http.post<FormData>(`${this.baseUrl11}`, formdata).subscribe(res => this.isLoggedIn = true,
      (err) => console.log(err)
    );

    return of(true).pipe(
      delay(1000),
      tap(val => this.isLoggedIn = this.isLoggedIn)
    );
  }


  openConfirmationDialog() {
    this.dialog.open(MyDialogComponent, {width: '390px' , disableClose: true});
  }


  getEtudiantByMail(email: string): Observable<any> {
    return this.http.get(`${this.baseUrl15}/${email}`);
  }

}
