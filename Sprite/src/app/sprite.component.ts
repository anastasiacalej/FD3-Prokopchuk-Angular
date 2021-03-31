import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'sprite',
  templateUrl: 'sprite.component.html',
  styleUrls: ['sprite.component.css']
})
export class Sprite {

  @Input("url")
  private url:string;

  @Input("offsetX")
  private offsetX:number;

  @Input("offsetY")
  private offsetY:number;

  @Input("width")
  private width:number;

  @Input("height")
  private height:number;

  @Output("click-sprite")
  private clickSpr=new EventEmitter<number>();

  @Output("load-sprite")
  private loadSprite=new EventEmitter<HTMLDivElement>();

  clickSprite():void {
    this.clickSpr.emit();
  }

  setWidthAndHeight(ev:Event){
    this.loadSprite.emit(<HTMLDivElement>ev.target);
  }

  getURL():string{
    return this.url;
  }

  getWidth():number{
    return this.width;
  }

  getHeight():number{
    return this.height;
  }

  getOffsetX():number{
    return this.offsetX;
  }

  getOffsetY():number{
    return this.offsetY;
  }

}
