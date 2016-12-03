import { cli } from 'webdriver-manager/built/lib/webdriver';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  messages = [
    { from: "Julien", sujet: "Super Tutoriel en PHP", message: "Blabla c'est super cool ton truc!" },
    { from: "Marie", sujet: "Super Tutoriel en CSS", message: "Whaouu c'est super sympa :)" },
  ];



}
