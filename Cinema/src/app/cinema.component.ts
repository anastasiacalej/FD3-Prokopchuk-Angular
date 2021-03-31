import { Component} from '@angular/core';
import { TicketsDatasource } from './tickets.datasource';

@Component({
  moduleId: module.id,
  selector: 'cinema',
  templateUrl: 'cinema.component.html',
  styleUrls: ['cinema.component.css']
})
export class Cinema {
  constructor(private datasource:TicketsDatasource){
    
  }

  getAllTickets():number{
    return this.datasource.getAllTickets().length;
  }

  getSoldTickets():number{
    return this.datasource.getSoldTickets().length;
  }

  getInstockTickets():number{
    return this.datasource.getInstockTickets().length;
  }
}
