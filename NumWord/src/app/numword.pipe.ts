import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name:"numword",
  pure:true,
})
export class NumWordPipe implements PipeTransform {

  transform(num:number,word1:string,word2:string,word5:string):string {
      var word:string='';
      var dd:number=num%100;
          if ( (dd>=11) && (dd<=19) ) {
              word=num+" "+word5;
              return word;
          }
               
      var d:number=num%10;
          if ( d==1 ) {
              word=num+" "+word1;
              return word;
          }
                
          if ( (d>=2) && (d<=4) ){
              word=num+" "+word2;
              return word;
          }
                
          word=num+" "+word5;
          return word;
        
  }

}

