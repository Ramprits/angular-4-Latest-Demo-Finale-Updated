import { NgModule } from '@angular/core';
import { EventComponent } from "./event.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Eventroutes } from "./event.routing";
import { EventDetailComponent } from "./eventDetail/eventDetail.component";
import { NewEventComponent } from "./newEvent/newEvent.component";

@NgModule({
     imports: [
          CommonModule,
          FormsModule,
          ReactiveFormsModule,
          RouterModule.forChild(Eventroutes)
     ],
     exports: [],
     declarations: [
          EventComponent,
          EventDetailComponent,
          NewEventComponent
     ],
     providers: [],
})
export class EventModule { }
