"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var customer_component_1 = require("./customers/customer.component");
var router_1 = require("@angular/router");
var App_routing_1 = require("./App-routing");
var welcome_component_1 = require("./welcome/welcome.component");
var nav_component_1 = require("./nav/nav.component");
var event_component_1 = require("./event/event.component");
var event_service_1 = require("./event/event.service");
var eventDetail_component_1 = require("./event/eventDetail/eventDetail.component");
var product_component_1 = require("./product/product.component");
var productDetail_component_1 = require("./product/productDetail/productDetail.component");
var product_service_1 = require("./product/product.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.ReactiveFormsModule,
            router_1.RouterModule.forRoot(App_routing_1.Approutes),
            http_1.HttpModule
        ],
        providers: [event_service_1.EventService, product_service_1.ProductService],
        declarations: [
            app_component_1.AppComponent,
            customer_component_1.CustomerComponent,
            welcome_component_1.WelcomeComponent,
            nav_component_1.NavComponent,
            event_component_1.EventComponent,
            eventDetail_component_1.EventDetailComponent,
            product_component_1.ProductComponent,
            productDetail_component_1.ProductDetailComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map