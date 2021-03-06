"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var event_component_1 = require("./event.component");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var event_routing_1 = require("./event.routing");
var eventDetail_component_1 = require("./eventDetail/eventDetail.component");
var newEvent_component_1 = require("./newEvent/newEvent.component");
var EventModule = (function () {
    function EventModule() {
    }
    return EventModule;
}());
EventModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            router_1.RouterModule.forChild(event_routing_1.Eventroutes)
        ],
        exports: [],
        declarations: [
            event_component_1.EventComponent,
            eventDetail_component_1.EventDetailComponent,
            newEvent_component_1.NewEventComponent
        ],
        providers: [],
    })
], EventModule);
exports.EventModule = EventModule;
//# sourceMappingURL=event.module.js.map