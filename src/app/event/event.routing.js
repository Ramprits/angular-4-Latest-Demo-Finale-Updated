"use strict";
var event_component_1 = require("./event.component");
var eventDetail_component_1 = require("./eventDetail/eventDetail.component");
var newEvent_component_1 = require("./newEvent/newEvent.component");
exports.Eventroutes = [
    { path: 'eventList', component: event_component_1.EventComponent },
    { path: 'eventList/:id', component: eventDetail_component_1.EventDetailComponent },
    { path: 'newEvent', component: newEvent_component_1.NewEventComponent }
];
//# sourceMappingURL=event.routing.js.map