import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-eventDetail',
  templateUrl: './app/event/eventDetail/eventDetail.component.html',
  styleUrls: ['./app/event/eventDetail/eventDetail.component.css']
})
export class EventDetailComponent implements OnInit {
  event: any;
  constructor(private eventService: EventService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
  }
  eventBack() {
    this.router.navigate(['/events/eventList']);
  }

}