import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NumwordForm } from './numword-form.component';
import { NumWordPipe } from './numword.pipe';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    NumwordForm, NumWordPipe
  ],
  providers: [],
  bootstrap: [NumwordForm]
})
export class AppModule { }
