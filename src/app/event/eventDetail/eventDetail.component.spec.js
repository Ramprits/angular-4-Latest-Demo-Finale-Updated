"use strict";
/* tslint:disable:no-unused-variable */
var testing_1 = require("@angular/core/testing");
var eventDetail_component_1 = require("./eventDetail.component");
describe('EventDetailComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [eventDetail_component_1.EventDetailComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(eventDetail_component_1.EventDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=eventDetail.component.spec.js.map