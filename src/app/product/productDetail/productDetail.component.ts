import { Component, OnInit } from '@angular/core';
import { ProductService } from "../product.service";
import { Router, ActivatedRoute, Params } from '@angular/router'
import { IProduct } from "../product.module";
@Component({
  selector: 'app-productDetail',
  templateUrl: './app/product/productDetail/productDetail.component.html',
  styleUrls: ['./app/product/productDetail/productDetail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: IProduct;

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.productService.getProduct(+params['ProductID']).subscribe((product: IProduct) => {
        this.product = product;
      })
    })
  }

}