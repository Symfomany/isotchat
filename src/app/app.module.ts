import { UsersService } from './services/UsersService';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';
import { ActionComponent } from './action/action.component';
import { MessagesComponent } from './messages/messages.component';

import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from './../environments/firebase';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
    declarations: [
        AppComponent,
        ActionComponent,
        MessagesComponent,
        SidebarComponent,
    ],
    imports: [
        BrowserModule,
        AngularFireModule.initializeApp(firebaseConfig),
        MaterialModule.forRoot(),
        FormsModule,
        HttpModule
    ],
    providers: [UsersService],
    bootstrap: [AppComponent]
})
export class AppModule { }
