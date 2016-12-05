import { ClassGetter } from '@angular/compiler/src/output/output_ast';
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
    public messages: FirebaseListObservable<any[]>;

    public isLoaded = true;

    public nbMessages: any = 0;
    /**
     * Creates an instance of MessagesComponent.
     * 
     * @param {UsersService} userService
     * 
     * @memberOf MessagesComponent
     */
    constructor(private af: AngularFire) {
        this.messages = af.database.list('data/Angular2');
        this.nbMessages = this.messages.count();
        console.log(this.nbMessages);
        this.messages.subscribe(
            val => {
                this.isLoaded = false;
                console.log(val)
            }
        );

    }

    ngOnInit() {
        // this.userService.getAll().subscribe(
        //   messages => this.messages = messages)
    }

}
