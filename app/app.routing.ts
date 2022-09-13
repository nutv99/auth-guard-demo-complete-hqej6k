import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './login';
import { AuthGuard } from './_guards';
import { Role } from './_models';

const sPath = ['HomeComponent','AccountComponent']
const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'account',
        component: AccountComponent,
        canActivate: [AuthGuard]
    },
    { 
        path: 'login', 
        component: LoginComponent 
    },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);