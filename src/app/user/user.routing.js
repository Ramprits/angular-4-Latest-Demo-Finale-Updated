"use strict";
var profile_component_1 = require("./profile/profile.component");
var login_component_1 = require("./login/login.component");
exports.UserRoutes = [
    { path: 'profile', component: profile_component_1.ProfileComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: '', redirectTo: '/events', pathMatch: 'full' }
];
//# sourceMappingURL=user.routing.js.map