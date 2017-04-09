"use strict";
var router_1 = require("@angular/router");
var customer_component_1 = require("./customers/customer.component");
var welcome_component_1 = require("./welcome/welcome.component");
var event_component_1 = require("./event/event.component");
var eventDetail_component_1 = require("./event/eventDetail/eventDetail.component");
var product_component_1 = require("./product/product.component");
var productDetail_component_1 = require("./product/productDetail/productDetail.component");
exports.Approutes = [
    { path: 'products', component: product_component_1.ProductComponent },
    { path: 'products/:id', component: productDetail_component_1.ProductDetailComponent },
    { path: 'events', component: event_component_1.EventComponent },
    { path: 'events/:id', component: eventDetail_component_1.EventDetailComponent },
    { path: 'customer', component: customer_component_1.CustomerComponent },
    { path: 'welcome', component: welcome_component_1.WelcomeComponent },
    { path: 'user', loadChildren: 'app/user/user.module#UserModule' },
    { path: '', redirectTo: '/welcome', pathMatch: 'full' }
];
exports.AppRoutesRoutes = router_1.RouterModule.forChild(exports.Approutes);
//# sourceMappingURL=App-routing.js.map