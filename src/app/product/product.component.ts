import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { IProduct } from './product.module';

@Component({
  selector: 'app-product',
  templateUrl: './app/product/product.component.html',
  styleUrls: ['./app/product/product.component.css']
})
export class ProductComponent implements OnInit {
  ProductList: IProduct[]
  constructor(private productService: ProductService) { }

  ngOnInit() {
    return this.productService.GetProducts().subscribe(product => {
      // tslint:disable-next-line:no-trailing-whitespace
      this.ProductList = product;
    });
  }
// tslint:disable-next-line:eofline
}