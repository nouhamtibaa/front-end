import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Sujet} from '../sujet';
import {EtudiantService} from '../etudiant.service';
import {MatDialog} from '@angular/material/dialog';
import {MyDialogComponent} from '../my-dialog/my-dialog.component';
import {MyDialog2Component} from '../my-dialog2/my-dialog2.component';
import {Etudiant} from '../etudiant';
import {MyDialog3Component} from '../my-dialog3/my-dialog3.component';

@Component({
  selector: 'app-details-sujet',
  templateUrl: './details-sujet.component.html',
  styleUrls: ['./details-sujet.component.css']
})
export class DetailsSujetComponent implements OnInit {

  id: number;

  idPos: number = null;
  sujet: Sujet;
  sujet2: Sujet;
  email = sessionStorage.getItem('id');
etudiant: Etudiant;

 conv: string;

  constructor(private route: ActivatedRoute, private router: Router,
              private employeeService: EtudiantService , public  dialog: MatDialog) { }

  ngOnInit(): void {

    this.sujet = new Sujet();

    this.id = this.route.snapshot.params['id'];
    this.idPos = this.id;
    this.employeeService.getSujetsListById(this.id)
      .subscribe(data => {
        console.log(data)
        this.sujet = data;
      }, error => console.log(error));


  }




  list() {
    this.router.navigate(['sujet']);
  }


 goLogin() {
    this.router.navigate(['login']);
  }


  postuler() {

    const formData = new FormData();
    formData.append('email', this.email);
    formData.append('id', String(this.id));

    this.employeeService.getEtudiantByMail(this.email).subscribe(data => {
      console.log(data)
      this.etudiant = data;
    }, error => console.log(error));
    sessionStorage.setItem('email', this.email);
    this.employeeService.postuler( formData).subscribe(

      () => {
        let dialogRef = this.dialog.open(MyDialogComponent, {});

        dialogRef.afterClosed();
      },
          (err) =>      {
        if (this.etudiant.compteur === 0 ) {
          console.log("sayéééé");
          let dialogRef = this.dialog.open(MyDialog3Component, {});
          dialogRef.afterClosed();
        } else{
        let dialogRef = this.dialog.open(MyDialog2Component, {});
        dialogRef.afterClosed(); }}
    );

  }

}


