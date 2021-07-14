import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

import { Product } from '../model/product';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Output()
  addToBasket = new EventEmitter<Product>();

  @Input()
  data: Product;

  constructor(
    private productService: ProductService, 
    private router: Router
  ) {}

  ngOnInit() {}

  addToBasketClick() {
    this.addToBasket.emit(this.data);
  }

  isTheLast() {
    return this.productService.isTheLast(this.data);
  }

  redirectionDetails() {
    this.router.navigateByUrl('/product/'+this.data.id)
  }
}
