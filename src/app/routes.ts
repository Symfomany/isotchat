import { TchatComponent } from './tab/tchat/tchat.component';
import { Routes } from '@angular/router';
import { AccountComponent } from './tab/account/account.component';
import { NotificationsComponent } from './tab/notifications/notifications.component';


export const appRoutes: Routes = [
    { path: '', component: TchatComponent },
    { path: 'home/:action', component: TchatComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: 'account', component: AccountComponent },
];
