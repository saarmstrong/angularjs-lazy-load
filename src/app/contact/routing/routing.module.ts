import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormComponent }        from '../form/form.component';

const routes: Routes = [
    {
        path: '',
        component: FormComponent,
    }
];

export const Routing: ModuleWithProviders = RouterModule.forChild(routes);
