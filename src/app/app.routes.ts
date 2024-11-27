import { Routes } from '@angular/router';
import { registrationComponent } from './registration/registration.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginAndRegistrationComponent } from './login-and-registration/login-and-registration.component';

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
    }
];