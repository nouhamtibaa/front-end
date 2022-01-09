import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Etudiant} from '../etudiant';
import {Router} from '@angular/router';
import {EtudiantService} from '../etudiant.service';
import {Sujet} from '../sujet';
import { Location } from '@angular/common';


@Component({
  selector: 'app-sujet-list',
  templateUrl: './sujet-list.component.html',
  styleUrls: ['./sujet-list.component.css']
})
export class SujetListComponent implements OnInit {
  sujets: Observable<Sujet[]>;

  constructor(private etudiantService: EtudiantService,
              private router: Router) {}

  ngOnInit() {

    this.reloadData();
  }

  reloadData() {
    this.sujets = this.etudiantService.getSujetsList();
  }


  selectPokemon(pokemon: Sujet){

    let link = ['/detail-sujet', pokemon.id];
    this.router.navigate(link);

  }

 sujetDetails(id: number){
    this.router.navigate(['details', id]);
  }



}
