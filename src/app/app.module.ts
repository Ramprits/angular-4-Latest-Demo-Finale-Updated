import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customers/customer.component';
import { RouterModule } from "@angular/router";
import { Approutes } from "./App-routing";
import { WelcomeComponent } from "./welcome/welcome.component";
import { NavComponent } from "./nav/nav.component";
import { EventService } from "./event/event.service";
import { ProductComponent } from "./product/product.component";
import { ProductDetailComponent } from "./product/productDetail/productDetail.component";
import { ProductService } from "./product/product.service";

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(Approutes),
    HttpModule
  ],
  providers: [EventService, ProductService],
  declarations: [
    AppComponent,
    CustomerComponent,
    WelcomeComponent,
    NavComponent,
    ProductComponent,
    ProductDetailComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
