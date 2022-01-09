import {Component, Inject, OnInit} from '@angular/core';
import {EtudiantService} from '../etudiant.service';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {EmailMessage} from '../emailMessage';
import {Location} from '@angular/common';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {Sujet} from '../sujet';
import {Etudiant} from '../etudiant';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css']
})
export class SendEmailComponent implements OnInit {

  emailMessage: EmailMessage = new EmailMessage();

  submitted = false;
  etudiant: Etudiant;
  id: number;
  alert: boolean = false;
  verif : number  = 0;
  aa: string;
  constructor(private etudiantService: EtudiantService, private route: ActivatedRoute,private http: HttpClient, private router: Router, private location: Location
              /*, public dialog: MatDialog, public dialogRef: MatDialogRef<SendEmailComponent>, @Inject(MAT_DIALOG_DATA) public data: any*/ ) { }

  ngOnInit(): void {


  }


  onSubmit() {


    this.etudiant = new Etudiant();
    this.id = this.route.snapshot.params['id'];

    this.etudiantService.getEtudiantById(this.id)
      .subscribe(data => {
        console.log(data)
        this.etudiant = data;
        this.etudiant.etat = 1;
        this.etudiantService.updateEtudiant(this.id, this.etudiant).subscribe(data => {
            console.log(data);
            this.alert = true;

          },
          error => console.log(error));
      }, error => console.log(error));


    console.log("voilaaaa" + this.id);
    this.etudiantService.sendEmail(this.emailMessage).subscribe(res => {this.alert = true,
    this.verif = 1;
    this.aa = "true";
    sessionStorage.setItem('verif', this.aa);
    },
      (err) => console.log(err)
    );
  }
}
