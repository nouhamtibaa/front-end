import {Component, OnInit} from '@angular/core';
import {EtudiantService} from './etudiant.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Stageprojet';
  constructor( private router: Router) {}
  ngOnInit() {

  }

}
