import { AngularFire } from 'angularfire2';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {

  public message: string = "";

  constructor(private af: AngularFire) { }


  onSubmit() {
    const items = this.af.database.list('data/Angular2');
    let message = this.message.trim();
    let now = Math.floor(Date.now() / 1000);
    items.push({
      lastMessage: message,
      avatar: 'https://cloudinary-a.akamaihd.net/hopwork/image/upload/t_bigprofile/fqywhpejolfwi4fslkkw.jpg',
      name: "Boyer Julien",
      status: "online",
      created: now
    });

    this.message = "";

  }

  ngOnInit() {

  }

}
