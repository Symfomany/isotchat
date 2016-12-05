import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  /**
   * 
   * All messages 
   * @type {Array<any>}
   * @memberOf MessagesComponent
   */
  messages: FirebaseListObservable<any[]>;


  /**
   * Creates an instance of MessagesComponent.
   * 
   * @param {UsersService} userService
   * 
   * @memberOf MessagesComponent
   */
  constructor(private af: AngularFire) {
    this.messages = af.database.list('data/Angular2');
    this.messages.subscribe(
      val => console.log(val)
    );
  }

  ngOnInit() {
    // this.userService.getAll().subscribe(
    //   messages => this.messages = messages)
  }

}
