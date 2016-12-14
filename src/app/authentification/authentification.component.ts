import { MdDialogRef } from '@angular/material';
import { Component } from '@angular/core';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationDialog {

  public visible:boolean = true;

  public submitted:boolean = false;

  constructor(public dialogRef: MdDialogRef<AuthentificationDialog>) { }

  /**
   * 
   * @memberOf AuthentificationDialog
   */
  onSubmit() {
    console.log("laaaaa");
    this.submitted = true;
  }

  /**
   * 
   * @memberOf AuthentificationDialog
  
   */
  toggle(visible:boolean){
    this.visible = visible;
  }

}
