"use strict";
var router_1 = require("@angular/router");
var customer_component_1 = require("./customers/customer.component");
var welcome_component_1 = require("./welcome/welcome.component");
var product_component_1 = require("./product/product.component");
var productDetail_component_1 = require("./product/productDetail/productDetail.component");
exports.Approutes = [
    { path: 'products', component: product_component_1.ProductComponent },
    { path: 'products/:id', component: productDetail_component_1.ProductDetailComponent },
    { path: 'customer', component: customer_component_1.CustomerComponent },
    { path: 'welcome', component: welcome_component_1.WelcomeComponent },
    { path: 'events', loadChildren: 'app/event/event.module#EventModule' },
    { path: 'user', loadChildren: 'app/user/user.module#UserModule' },
    { path: '', redirectTo: '/welcome', pathMatch: 'full' }
];
exports.AppRoutesRoutes = router_1.RouterModule.forChild(exports.Approutes);
//# sourceMappingURL=App-routing.js.map