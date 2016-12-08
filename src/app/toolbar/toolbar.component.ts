import {ViewChild} from '@angular/core/src/metadata/di';
import {MdDialog, MdDialogRef, MdSidenav} from '@angular/material';
import { AuthentificationDialog } from '../authentification/authentification.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  dialogRef: MdDialogRef<AuthentificationDialog>;
  @ViewChild('start') start:MdSidenav;

  constructor(public dialog: MdDialog) { }
  openDialog() {
    this.dialogRef = this.dialog.open(AuthentificationDialog, {
      disableClose: false
    });

    this.dialogRef.afterClosed().subscribe(result => {
      console.log('result: ' + result);
      this.dialogRef = null;
    });
  }

  go(tech:any){
    console.log(tech);
    this.start.close();
  }


  ngOnInit() {
  }


}