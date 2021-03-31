import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Cinema } from './cinema.component';
import { Hall } from './hall.component';
import { Cash } from './cash.component';
import {TicketsDatasource} from './tickets.datasource';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    Cinema, Hall, Cash
  ],
  providers: [TicketsDatasource],
  bootstrap: [Cinema]
})
export class AppModule { }
