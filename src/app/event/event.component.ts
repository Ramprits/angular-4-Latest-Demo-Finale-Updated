import { Component, OnInit } from '@angular/core';
import { EventService } from "./event.service";

@Component({
  selector: 'app-event',
  templateUrl: './app/event/event.component.html',
  styleUrls: ['./app/event/event.component.css']
})
export class EventComponent implements OnInit {
  events: any[]
  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

}