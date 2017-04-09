"use strict";
/* tslint:disable:no-unused-variable */
var testing_1 = require("@angular/core/testing");
var productDetail_component_1 = require("./productDetail.component");
describe('ProductDetailComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [productDetail_component_1.ProductDetailComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(productDetail_component_1.ProductDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=productDetail.component.spec.js.map