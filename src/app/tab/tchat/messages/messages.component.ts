import { Component, OnInit, style, animate, transition, trigger } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
declare var $: any;

@Component({
    selector: 'app-messages',
    templateUrl: './messages.component.html',
    animations: [
        trigger('fadeInOut', [
            transition(':enter', [   // :enter is alias to 'void => *'
                style({ opacity: 0 }),
                animate(500, style({ opacity: 1 }))
            ]),
            transition(':leave', [   // :leave is alias to '* => void'
                animate(500, style({ opacity: 0 }))
            ])
        ])
    ],
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

    public compteur: number = 10;

    swipeDirection: string = '-';

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
                orderByChild: 'created',
                limitToLast: this.compteur,
            }
        });


        this.messages.subscribe(
            val => {
                this.isLoaded = false;
                this.nbMessages = val.length;
                var objDiv = document.getElementById("messagesList");
                objDiv.scrollTop = objDiv.scrollHeight;

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

    more(){
        this.compteur += 10;
         this.messages = this.af.database.list('data/Angular2', {
            query: {
                orderByChild: 'created',
                limitToLast: this.compteur,
            }
        });
    }

    ngOnInit() {
        // this.userService.getAll().subscribe(
        //   messages => this.messages = messages)
        $('#messagesList').stop().animate({
            scrollTop: $('#messagesList')[0].scrollHeight
        }, 800);
    }


    swipeRight(message: any, event: any): void {

        if (!$(event.target).hasClass(".md-list-item")) {
            $(event.target).parents('.md-list-item').animate({
                left: "+=50",
                opacity: "0",
            }, 500, () => {
                $(event.target).parents('.md-list-item').hide();
                const items = this.af.database.list('/data/Angular2');
                items.remove(message);
            });
        } else {
            $(event.target).animate({
                left: "+=50",
                opacity: "0",
            }, 1200, () => {
                $(event.target).hide();
                const items = this.af.database.list('/data/Angular2');
                items.remove(message);
            });
        }

    }




}
