import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-my-dialog2',
  templateUrl: './my-dialog2.component.html',
  styleUrls: ['./my-dialog2.component.css']
})
export class MyDialog2Component implements OnInit {
  constructor(public dialogRef: MatDialogRef<MyDialog2Component>, @Inject(MAT_DIALOG_DATA) public data: any) { }



  /*
    openConfirmationDialog(){
      this.dialog.
    }*/
  ngOnInit(): void {
  }


  save() {

    this.dialogRef.close("i was saved");
  }


}
