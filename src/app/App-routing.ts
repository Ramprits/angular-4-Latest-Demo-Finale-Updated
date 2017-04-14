import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customers/customer.component';
import { WelcomeComponent } from './welcome/welcome.component';
// tslint:disable-next-line:no-unused-variable
import { EventComponent } from './event/event.component';
// tslint:disable-next-line:no-unused-variable
import { EventDetailComponent } from './event/eventDetail/eventDetail.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product/productDetail/productDetail.component';

export const Approutes: Routes = [
  { path: 'products', component: ProductComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'welcome', component: WelcomeComponent },
  {path: 'events', loadChildren: 'app/event/event.module#EventModule'},
  { path: 'user', loadChildren: 'app/user/user.module#UserModule' },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' }
];
export const AppRoutesRoutes = RouterModule.forChild(Approutes);
