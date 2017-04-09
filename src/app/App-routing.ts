import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from "./customers/customer.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { EventComponent } from "./event/event.component";
import { EventDetailComponent } from "./event/eventDetail/eventDetail.component";
import { ProductComponent } from "./product/product.component";
import { ProductDetailComponent } from "./product/productDetail/productDetail.component";

export const Approutes: Routes = [
  { path: 'products', component: ProductComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'events', component: EventComponent },
  { path: 'events/:id', component: EventDetailComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'user', loadChildren: 'app/user/user.module#UserModule' },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' }
];
export const AppRoutesRoutes = RouterModule.forChild(Approutes);
