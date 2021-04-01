import { Injectable } from "@angular/core";
import { from } from 'rxjs';
import {Observable} from 'rxjs';


@Injectable()
export class TicketsDatasource {

  private allTickets:Array<number>;

  private soldTickets:Array<number>=[];

  private instockTickets:Array<number>;

  private events$:Observable<Array<boolean>>;

  constructor(){
    this.allTickets=[];
    let place:number=1;
    let countPlace:number=20;
    for(let i:number=0;i<countPlace;i++){
      this.allTickets[i]=place;
      place++;
    }
    this.instockTickets=[...this.allTickets];
    this.events$=new Observable<Array<boolean>>();
  }
  
  getPlacesObservable():Observable<Array<boolean>> {
    return this.events$;
  }

  getAllTickets():Array<number> {
    return this.allTickets;
  };

  getSoldTickets():Array<number> {
    return this.soldTickets;
  };

  getInstockTickets():Array<number> {
    return this.instockTickets;
  };

  getEvents():void{
    let fff:Array<boolean>=this.allTickets.map((v:number):boolean=>{
      if(this.soldTickets.indexOf(v)!==-1){
        return false;
      }else{
        return true;
      }
    });
    
    this.events$=from([fff]);
  }


  setTicketsForPerson(count:number):Array<number>{

    if(this.instockTickets.length>0){
    let tickets:Array<number>=[];//
    let randomNum;
    let currMassiv=[...this.instockTickets];
    if(count==1){
      randomNum=Math.floor(Math.random()*currMassiv.length);
      //console.log(randomNum);//индекс

      tickets.push(currMassiv[randomNum]);
      //console.log(tickets);//билет № для покупателя

      this.instockTickets.splice(randomNum,1);
      //console.log(this.instockTickets);//остались билеты №...

      this.soldTickets.push(currMassiv[randomNum]);
      //console.log(this.soldTickets);//проданы билеты №...
      
      //console.log(this.instockTickets);//остались билеты №...
      this.getEvents();
      return tickets;
    }else{
      let pos;
      for(let i:number=0; i<=currMassiv.length; i++){
        if(tickets.length===0){
          tickets.push(currMassiv[i]);
          pos=i;
        }else if(tickets.length<count){
          if(currMassiv[i]-currMassiv[i-1]===1){
            tickets.push(currMassiv[i]);   
          }else{
            tickets=[currMassiv[i]];  
            pos=i;
          }
        }else if(tickets.length==count){
          this.instockTickets.splice(pos,count);
          this.soldTickets=[ ...this.soldTickets, ...tickets ];
          //console.log(this.instockTickets);//остались билеты №...
          this.getEvents();
          return tickets;
        }
      }

      if(tickets.length<=count){
        return [];
      }
       
  }
  
}
return [];
  }
}