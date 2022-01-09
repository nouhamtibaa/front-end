import { Component, OnInit } from '@angular/core';
import {Sujet} from '../sujet';
import {ActivatedRoute, Router} from '@angular/router';
import {EtudiantService} from '../etudiant.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-test-cv',
  templateUrl: './test-cv.component.html',
  styleUrls: ['./test-cv.component.css']
})
export class TestCVComponent implements OnInit {

  id: number;


  constructor(private route: ActivatedRoute,private router: Router, private location: Location,
              private employeeService: EtudiantService) { }

  ngOnInit(): void {


    this.id = this.route.snapshot.params['id'];

    this.employeeService.getCVEtudiant(this.id).subscribe( x => {
      const blob = new Blob([x], {type: 'application/pdf'});
      if(window.navigator && window.navigator.msSaveOrOpenBlob) {

        window.navigator.msSaveOrOpenBlob(blob);
        return;
      }
      const  data = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = data;
      link.download = 'cv.pdf';
      link.dispatchEvent(new MouseEvent('click', {bubbles: true, cancelable: true, view: window}))
      setTimeout(function() {
       window.URL.revokeObjectURL(data);
       link.remove();

}, 100);
      });
this.goBack();

  }

  goBack() {
    this.location.back();
  }
}
