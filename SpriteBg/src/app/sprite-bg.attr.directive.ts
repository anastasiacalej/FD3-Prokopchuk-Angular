import { Directive, Attribute, HostBinding, HostListener } from '@angular/core';

@Directive({ 
  selector: "[sprite-bg]", 
})

export class SpriteBgDirective {
  constructor( 
  @Attribute("sprite-url") url: string,
  @Attribute("sprite-offset-x") offsetX: number,
  @Attribute("sprite-offset-y") offsetY: number,
  @Attribute("sprite-width") width: number,
  @Attribute("sprite-height") height: number,) {
       this.url='url('+url+')';
       this.offsetX=offsetX;
       this.offsetY=offsetY;
       this.width=width;
       this.height=height;
  }
  private column:number=5;//число колонок в спрайт-листе
  private string:number=4;//число строк в спрайт-листе
  

  @HostBinding("style.backgroundImage") 
  private url:string;

  @HostBinding("style.background-position-x.px") 
  private offsetX:number;

  @HostBinding("style.background-position-y.px") 
  private offsetY:number;

  @HostBinding("style.width.px") 
  private width:number;

  @HostBinding("style.height.px") 
  private height:number;

  

  @HostListener("click")
  changeOffsetXandY():void{
    if(this.offsetX<=-this.width*(this.column-1)){
          this.offsetX=0;

              if(this.offsetY<=-this.height*(this.string-1)){
                this.offsetY=0;
              }else{
                this.offsetY-=this.height;
              }

    }else{
      this.offsetX-=this.width;
    }
    
  }

}
