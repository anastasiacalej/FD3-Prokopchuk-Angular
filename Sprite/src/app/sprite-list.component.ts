import { Component} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'sprite-list',
  templateUrl: 'sprite-list.component.html',
  styleUrls: ['sprite-list.component.css']
})
export class SpriteList {

  private _url:string="http://fe.it-academy.by/Examples/cards2.png";
  private _column:number=4;//число колонок в спрайт-листе
  private _string:number=14;//число строк в спрайт-листе
  private _offsetX:number=0;//положение left спрайт-листа относительно содержащего этот спрайт-лист diva
  private _offsetY:number=0;//положение top спрайт-листа относительно содержащего этот спрайт-лист diva
  private _width:number=0;//ширина diva содержащего этот спрайт-лист 
  private _height:number=0;//высота diva содержащего этот спрайт-лист

  setWaH(el:HTMLDivElement):void{
    this._width=el.offsetWidth/this._column;
    this._height=el.offsetHeight/this._string;
  }

  changeOffsetXandY():void{
    if(this._offsetX<=-this._width*(this._column-1)){
          this._offsetX=0;

              if(this._offsetY<=-this._height*(this._string-1)){
                this._offsetY=0;
              }else{
                this._offsetY-=this._height;
              }

    }else{
      this._offsetX-=this._width;
    }
    
  }

  getOffsetX():number {
    return this._offsetX;
  };

  getOffsetY():number {
    return this._offsetY;
  };

  getWidth():number { 
    return this._width;
  };

  getHeight():number {
    return this._height;
  };

  getURL():string {
    return this._url;
  };


}
