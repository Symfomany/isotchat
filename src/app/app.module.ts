import { UsersService } from './services/UsersService';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';
import { ActionComponent } from './action/action.component';
import { MessagesComponent } from './messages/messages.component';

import * as firebase from 'firebase';
import { AngularFireModule } from 'angularfire2/index';
import { firebaseConfig } from './../environments/firebase';



@NgModule({
  declarations: [
    AppComponent,
    ActionComponent,
    MessagesComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule.forRoot(),
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
