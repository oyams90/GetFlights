import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {AppRoutingModule} from "./app-routing.module";
import {LocationStrategy, HashLocationStrategy} from "@angular/common";
import {FlightsComponent} from "./Components/flights.component";
import {FlightsSearchComponent} from "./Components/flights-search.component";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {MyDatePickerModule} from "mydatepicker";
import {MomentModule} from "angular2-moment";

@NgModule({
  imports:      [ NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    MyDatePickerModule,
    MomentModule],
  declarations: [ AppComponent, FlightsComponent, FlightsSearchComponent],
  bootstrap:    [ AppComponent ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }]//to prevent error when refreshed.
})
export class AppModule {
}