import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TicketsDatasource } from './tickets.datasource';

@Component({
  moduleId: module.id,
  selector: 'hall',
  templateUrl: 'hall.component.html',
  styleUrls: ['hall.component.css']
})
export class Hall {
  
  @Input("allTickets")
  private allTickets:number;

  @Input("soldTickets")
  private soldTickets:number;

  @Input("instockTickets")
  private instockTickets:number;

  getAllTickets():number{
    return this.allTickets;
  }

  getSoldTickets():number{
    return this.soldTickets;
  }

  getInstockTickets():number{
    return this.instockTickets;
  }
}
