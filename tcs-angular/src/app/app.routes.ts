import { Routes } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { AppComponent } from './app.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';

export const routes: Routes = [

    {
        path:'',
        component: AppComponent
    },
    {
        path:'registration',
        component: FormsComponent
    },
    {
        path: 'login',
        component: TemplateFormsComponent,
    }
];