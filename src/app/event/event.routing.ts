import { Routes, RouterModule } from '@angular/router';
import { EventComponent } from "./event.component";
import { EventDetailComponent } from "./eventDetail/eventDetail.component";
import { NewEventComponent } from "./newEvent/newEvent.component";

export const Eventroutes: Routes = [
  { path: 'eventList', component: EventComponent },
  { path: 'eventList/:id', component: EventDetailComponent },
  { path: 'newEvent', component: NewEventComponent }
];

