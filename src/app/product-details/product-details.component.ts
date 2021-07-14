import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ProductService} from '../services/product.service';
import {Product} from '../model/product';
import {first, shareReplay} from 'rxjs/operators';
import {Router} from '@angular/router'


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ProductDetailsComponent {

  products: Product[] = [];
  product: Product;

  constructor(private productService: ProductService,
    private router: Router) {
    this.productService.getProductDetails(this.router.url.split('/').pop())
      .pipe(
        shareReplay(1),
        first()
      ).subscribe(p =>  this.product = p);

      productService.getProducts().subscribe(products => {
        this.products = products;
      });
      
  }

  isAvailable(product: Product): boolean {
    return this.productService.isAvailable(product);
  }

  ngOnInit () {
    console.log(this.router.url)
  }
}

