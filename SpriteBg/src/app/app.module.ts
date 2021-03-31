import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SpriteList } from './sprite-list.component';
import { SpriteBgDirective } from './sprite-bg.attr.directive';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    SpriteList, SpriteBgDirective
  ],
  providers: [],
  bootstrap: [SpriteList]
})
export class AppModule { }
