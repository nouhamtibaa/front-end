import {Component, Inject, OnInit} from '@angular/core';
import {Etudiant} from '../etudiant';
import {Router} from '@angular/router';
import {EtudiantService} from '../etudiant.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-create-etudiant',
  templateUrl: './create-etudiant.component.html',
  styleUrls: ['./create-etudiant.component.css']
})
export class CreateEtudiantComponent implements OnInit {

  etudiant: Etudiant = new Etudiant();
  submitted = false;
  alert: boolean = false;
  message: boolean = true;
  message2: boolean = true;
  fileToUpload: File = null;
  test: string;
  constructor(private etudiantService: EtudiantService, private http: HttpClient,private router: Router, public dialogRef: MatDialogRef<CreateEtudiantComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }
  uploadForm: FormGroup;
  ngOnInit() {

  }

setMessage() {
   // this.message = "confirmation mot de passe est incorrect ! "
}
/*
  save() {
    this.etudiantService.createEtudiant(this.etudiant)
      .subscribe(data => console.log(data), error => console.log(error));
    this.etudiant = new Etudiant();
    this.gotoList();
  }
*/
 /* onSubmit() {
    this.submitted = true;
    this.save();
  }*/

  gotoList() {
    this.dialogRef.close("i was saved");
    // this.router.navigate(['/login']);
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    if (this.fileToUpload.size === 0) {console.log(this.test = "haaa33")};
  }


  onSubmit() {
    const formData = new FormData();
    formData.append('nom', this.etudiant.nom);
    formData.append('prenom', this.etudiant.prenom);
    formData.append('email', this.etudiant.email);
    formData.append('password', this.etudiant.password);
    formData.append('confirm', this.etudiant.confirm);
    formData.append('imageFile', this.fileToUpload, this.fileToUpload.name);
    const formData2 = new FormData();
    formData2.append('email', this.etudiant.email);

    this.http.post<FormData>('http://localhost:8080/api/v1/upload', formData).subscribe(res => {
     this.alert = true;
     /* this.router.navigate(['/login']) */ },
        () => {
       this.etudiantService.verifMail(formData2).subscribe(() => {
            if (!this.etudiantService.isEmail) {
              console.log("exiiiiiiiiiiist");
              this.message2 = false;

            }
            else this.message = false;
          });
      }
    );


  }

  }









