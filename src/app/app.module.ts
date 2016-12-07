import { UsersService } from './services/UsersService';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';
import { ActionComponent } from './action/action.component';
import { MessagesComponent } from './tab/tchat/messages/messages.component';

import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from './../environments/firebase';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TabComponent } from './tab/tab.component';
import { TchatComponent } from './tab/tchat/tchat.component';
import { NotificationsComponent } from './tab/notifications/notifications.component';
import { MapComponent } from './tab/map/map.component';
import { FavoriteComponent } from './tab/favorite/favorite.component';
import { SettingComponent } from './tab/setting/setting.component';
import { RightmenuComponent } from './rightmenu/rightmenu.component';
import { AuthentificationDialog } from './authentification/authentification.component';
import { MessagePipe } from './message-pipe.pipe';




@NgModule({
    declarations: [
        AuthentificationDialog,
        AppComponent,
        ActionComponent,
        MessagesComponent,
        SidebarComponent,
        ToolbarComponent,
        TabComponent,
        TchatComponent,
        NotificationsComponent,
        MapComponent,
        FavoriteComponent,
        SettingComponent,
        RightmenuComponent,
        MessagePipe,
    ],
    entryComponents: [
        AuthentificationDialog
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
