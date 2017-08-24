import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }    from '../home/home.component'

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: HomeComponent,
    },
    {
        path: 'contact',
        loadChildren: 'app/contact/contact.module#ContactModule'
    },
    {
        path: 'about',
        loadChildren: 'app/about/about.module#AboutModule'
    }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes);
