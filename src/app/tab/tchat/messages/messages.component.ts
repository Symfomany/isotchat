import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

declare var $: any;

@Component({
    selector: 'app-messages',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.css', './messages.component.scss']
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
        this.messages = af.database.list('data/Angular2', {
            query: {
                orderByChild: 'created'
            }
        });

        Hammer(listContainer).on('drag', function (e) {

        });

        this.messages.subscribe(
            val => {
                this.isLoaded = false;
                this.nbMessages = val.length;
                // var objDiv = document.getElementById("messagesList");
                // objDiv.scrollTop = objDiv.scrollHeight;
                $('#messagesList').stop().animate({
                    scrollTop: $('#messagesList')[0].scrollHeight
                }, 800);
            }
        );

    }

    /**
     * 
     * @param {*} message
     * 
     * @memberOf MessagesComponent
     */
    removeMessage(message: any) {
        const items = this.af.database.list('/data/Angular2');
        items.remove(message);
    }

    ngOnInit() {
        // this.userService.getAll().subscribe(
        //   messages => this.messages = messages)
    }

}
