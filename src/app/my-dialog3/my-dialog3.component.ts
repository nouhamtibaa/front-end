import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-my-dialog3',
  templateUrl: './my-dialog3.component.html',
  styleUrls: ['./my-dialog3.component.css']
})
export class MyDialog3Component implements OnInit {

  constructor(public dialogRef: MatDialogRef<MyDialog3Component>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  save() {

    this.dialogRef.close("i was saved");
  }

}
