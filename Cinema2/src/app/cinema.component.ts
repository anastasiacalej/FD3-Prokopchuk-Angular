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

  getAllTickets():Array<number>{
    return this.datasource.getAllTickets();
  }

  getSoldTickets():Array<number>{
    return this.datasource.getSoldTickets();
  }

  getInstockTickets():Array<number>{
    return this.datasource.getInstockTickets();
  }
}
