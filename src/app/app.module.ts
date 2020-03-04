import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NumberToWordsPipe } from './pipe/number-to-words.pipe';
import {CalendarModule} from 'primeng/calendar';
import {AutoCompleteModule} from 'primeng/autocomplete';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BillgenerateComponent } from './billgenerate/billgenerate.component';
import { ShopdetailsComponent } from './shopdetails/shopdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    BillgenerateComponent,
    NumberToWordsPipe,
    ShopdetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CalendarModule,
    AutoCompleteModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
