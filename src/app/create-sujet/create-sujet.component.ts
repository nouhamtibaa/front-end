import {Component, Inject, OnInit} from '@angular/core';
import {Sujet} from '../sujet';
import {Router} from '@angular/router';
import {EtudiantService} from '../etudiant.service';
import {Location} from '@angular/common';
import {MyDialogComponent} from '../my-dialog/my-dialog.component';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-create-sujet',
  templateUrl: './create-sujet.component.html',
  styleUrls: ['./create-sujet.component.css']
})
export class CreateSujetComponent implements OnInit {
  alert: boolean = false;
  sujet: Sujet = new Sujet();
  submitted = false;

  constructor(private etudiantService: EtudiantService, private location: Location,private router: Router /*, public dialog: MatDialog, public dialogRef: MatDialogRef<CreateSujetComponent>, @Inject(MAT_DIALOG_DATA) public data: any */) { }


  ngOnInit(): void {
  }

  save() {
    this.etudiantService.addSujet(this.sujet)
      .subscribe(data => {
        console.log(data);
        this.alert = true;


      },
          error => console.log(error));
    this.sujet = new Sujet();
   // this.gotoList();
  }

  onSubmit() {

    this.save();
   // this.dialogRef.close("i was saved");
  }

  gotoList() {
  //  this.router.navigate(['/listSujetAdmin']);
   location.reload();
  }


  closeAlert(){

    this.alert = false;
  }
}
