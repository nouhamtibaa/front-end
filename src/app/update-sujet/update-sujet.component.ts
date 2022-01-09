import { Component, OnInit } from '@angular/core';
import {Sujet} from '../sujet';
import {ActivatedRoute, Router} from '@angular/router';
import {EtudiantService} from '../etudiant.service';

@Component({
  selector: 'app-update-sujet',
  templateUrl: './update-sujet.component.html',
  styleUrls: ['./update-sujet.component.css']
})
export class UpdateSujetComponent implements OnInit {
  id: number;
  sujet: Sujet;
  alert: boolean = false;
  constructor(private route: ActivatedRoute,private router: Router,
              private etudiantService: EtudiantService) { }
  submitted = false;
  ngOnInit() {
    this.sujet = new Sujet();

    this.id = this.route.snapshot.params['id'];

    this.etudiantService.getSujetsListById(this.id)
      .subscribe(data => {
        console.log(data)
        this.sujet = data;
      }, error => console.log(error));
  }

  updateSujet() {
    this.etudiantService.updateSujet(this.id, this.sujet)
      .subscribe(data => {
          console.log(data);
          this.alert = true;

        },
        error => console.log(error));
    this.sujet = new Sujet();
   // this.gotoList();
  }

  onSubmit() {
    this.updateSujet();
  }

  gotoList() {
    this.router.navigate(['/listSujetAdmin']);
  }

}
