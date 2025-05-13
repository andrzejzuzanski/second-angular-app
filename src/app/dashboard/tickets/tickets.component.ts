import { Component, ViewEncapsulation } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { Ticket } from './ticket.model';
import { Title } from '@angular/platform-browser';
import { TicketComponent } from './ticket/ticket.component';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
})
export class TicketsComponent {
  tickets: Ticket[] = [];

  onAdd(ticketData: { title: string; request: string }) {
    this.tickets.push({
      title: ticketData.title,
      request: ticketData.request,
      id: Math.random().toString(),
      status: 'open',
    });
  }
}
