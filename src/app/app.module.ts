import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRouting }           from './app-routing/app-routing.module';

import { AppComponent }         from './app.component';
import { HomeComponent }        from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
