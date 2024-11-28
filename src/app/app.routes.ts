import { Routes } from '@angular/router';
import { registrationComponent } from './registration/registration.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginAndRegistrationComponent } from './login-and-registration/login-and-registration.component';
import { HomeComponent } from './home/home.component';
import { AddUserComponent } from './home/add-user/add-user.component';
import { VaccineListComponent } from './home/vaccine-list/vaccine-list.component';
import { authGuard } from './Guards/auth.guard';

export const routes: Routes = [

    {
        path:'',
        component: AppComponent
    },
    {
        path:'registration',
        component: registrationComponent
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path:'both',
        component: LoginAndRegistrationComponent
    },
    {
        path: 'home',
        component: HomeComponent,
        children: [
            {
                path: 'add-user',
                component: AddUserComponent
            },
            {
                path: 'vaccine-list',
                component: VaccineListComponent
            }
        ],
        canActivate: [authGuard]

    }
];