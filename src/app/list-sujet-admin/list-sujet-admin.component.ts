import {Component, Inject, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Sujet} from '../sujet';
import {EtudiantService} from '../etudiant.service';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {MyDialogComponent} from '../my-dialog/my-dialog.component';
import {NotificationService} from '../notification.service';
import {CreateSujetComponent} from '../create-sujet/create-sujet.component';

@Component({
  selector: 'app-list-sujet-admin',
  templateUrl: './list-sujet-admin.component.html',
  styleUrls: ['./list-sujet-admin.component.css']
})
export class ListSujetAdminComponent implements OnInit {

  sujets: Observable<Sujet[]>;
  popoverTitle: string = 'Popover title';
  popoverMessage: string = 'PopoverDesciption';
  confirmClicked: boolean = false;
  public  cancelClicked: boolean = false;
  constructor(private etudiantService: EtudiantService,private location: Location,
              private router: Router, public dialog: MatDialog) {}

  ngOnInit() {

    this.reloadData();

  }

  reloadData() {
    this.sujets = this.etudiantService.getSujetsList();


  }


  sujetDetails(id: number){
    this.router.navigate(['etudiant', id]);
  }

  Ajoutsujet() {
  //  let dialogRef = this.dialog.open(CreateSujetComponent, {});
   this.router.navigate(['addSujet']);

  }



  deleteSujet(id: number) {
    if (confirm("êtes-vous sûr de vouloir supprimer ce sujet ?")) {
      this.etudiantService.deleteSujet(id)
        .subscribe(
          data => {
            console.log(data);
            this.reloadData();

          },
          error => console.log(error));
    }
  }

  updateSujet(id: number) {
    this.router.navigate(['update', id]);
  }
  openDialog(): void {

    let dialogRef = this.dialog.open(MyDialogComponent, {});
    dialogRef.afterClosed().subscribe(result => {
      console.log('the dialog was closed');
      console.log(result);
    });

  }

}
