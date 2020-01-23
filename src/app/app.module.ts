import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NumberToWordsPipe } from './pipe/number-to-words.pipe';
import {CalendarModule} from 'primeng/calendar';
import {AutoCompleteModule} from 'primeng/autocomplete';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BillgenerateComponent } from './billgenerate/billgenerate.component';

@NgModule({
  declarations: [
    AppComponent,
    BillgenerateComponent,
    NumberToWordsPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    CalendarModule,
    AutoCompleteModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
