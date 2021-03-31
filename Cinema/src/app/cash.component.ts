import { Component, Input, Output, ViewChild } from '@angular/core';
import { TicketsDatasource } from './tickets.datasource';

@Component({
  moduleId: module.id,
  selector: 'cash',
  templateUrl: 'cash.component.html',
  styleUrls: ['cash.component.css']
})
export class Cash {

  constructor(private datasource:TicketsDatasource){

  }
  private ticketsForPerson:Array<number>=[];
  private error:string='';

  @ViewChild("count") countRef; // получаем ссылку на элемент num темплейта
  
  @Input("whichCash")
  private cash:string;

  @Output("click")

  getCash():string {
    return this.cash;
  }

  getTicketsForPerson():Array<number>|string{
    
    if(this.ticketsForPerson.length>0)
     return this.ticketsForPerson;
     return this.error;
   
  }

  getTickets():void{
    this.ticketsForPerson=[];
    this.error=''; 
    let ticketsForPerson=this.datasource.setTicketsForPerson(this.countRef.nativeElement.value);
    if(ticketsForPerson.length>0)
    this.ticketsForPerson=ticketsForPerson;
    this.error='ошибка';  
  }


}
