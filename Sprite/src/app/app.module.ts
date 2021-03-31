import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SpriteList } from './sprite-list.component';
import { Sprite } from './sprite.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    SpriteList, Sprite
  ],
  providers: [],
  bootstrap: [SpriteList]
})
export class AppModule { }
