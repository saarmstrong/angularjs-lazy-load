import { NgModule }         from '@angular/core';
import { CommonModule }     from '@angular/common';

import { FormComponent }    from './form/form.component';

import { Routing }          from './routing/routing.module';

@NgModule({
  imports: [
    CommonModule,
    Routing
  ],
  declarations: [FormComponent]
})
export class ContactModule { }
