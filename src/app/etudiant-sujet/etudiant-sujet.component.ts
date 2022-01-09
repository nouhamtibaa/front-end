import { Component, OnInit } from '@angular/core';
import {Etudiant} from '../etudiant';
import {ActivatedRoute, Router} from '@angular/router';
import {EtudiantService} from '../etudiant.service';
import {Sujet} from '../sujet';
import {Observable} from 'rxjs';
import {MyDialogComponent} from '../my-dialog/my-dialog.component';
import {SendEmailComponent} from '../send-email/send-email.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-etudiant-sujet',
  templateUrl: './etudiant-sujet.component.html',
  styleUrls: ['./etudiant-sujet.component.css']
})
export class EtudiantSujetComponent implements OnInit {
  nbrr: number = 0;
  id: number;
  nb: number;
  sujet: Sujet;
  listEtudiant: Array<Etudiant>;
  verif: false;
  voir = sessionStorage.getItem("verif");
  constructor(private route: ActivatedRoute,private router: Router, public  dialog: MatDialog,
              private employeeService: EtudiantService) { }

  ngOnInit(): void {

    this.sujet = new Sujet();

    this.id = this.route.snapshot.params['id'];

    this.employeeService.getSujetsListById(this.id)
      .subscribe(data => {
        console.log(data)
        this.sujet = data;
        this.listEtudiant = this.sujet.etudiants;
        this.nb = this.listEtudiant.length;
        console.log(this.id);
      }, error => console.log(error));


  }
/*
  telechargerCV(id : number) {
  this.employeeService.getCV(id
  }
*/

   etudiantCVid( id: number ){
     this.router.navigate(['testCV', id]);
     console.log(id);
   }

  /*
    list(){
      this.router.navigate(['sujet']);
    } */


  Reponse(id: number) {
 //let dialogRef = this.dialog.open(SendEmailComponent, { });
  this.router.navigate(['sendEmail', id]);
  }

}
