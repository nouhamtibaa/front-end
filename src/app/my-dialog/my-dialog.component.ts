import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {EtudiantService} from '../etudiant.service';
import {Etudiant} from '../etudiant';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.css']
})
export class MyDialogComponent implements OnInit {

  etudiant: Etudiant;
  email: string;
  constructor(private etudiantService: EtudiantService, private location: Location,private router: Router, public dialog: MatDialog, public dialogRef: MatDialogRef<MyDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }



/*
  openConfirmationDialog(){
    this.dialog.
  }*/
  ngOnInit(): void {
    this.email = sessionStorage.getItem('email');
    console.log(this.email);
    this.etudiantService.getEtudiantByMail(this.email).subscribe(data => {
      console.log(data)
      this.etudiant = data;
    }, error => console.log(error));
  }


 save() {

    this.dialogRef.close("i was saved");
  }
}
