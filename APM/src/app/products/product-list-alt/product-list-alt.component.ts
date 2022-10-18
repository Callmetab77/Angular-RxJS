import { Component, OnInit, OnDestroy } from '@angular/core';

import { catchError, EMPTY, Subscription, tap } from 'rxjs';

import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list-alt.component.html'
})
export class ProductListAltComponent {
  pageTitle = 'Products';
  errorMessage = '';
  selectedProductId = 0;

  products$ = this.productService.products$.pipe(
    tap( () => {
      console.log('LOADING FALSE');    
    }
          
    ), 
    catchError(err=>{
      this.errorMessage = err;
      console.log('this.errorMessage = err;', this.errorMessage)
      return EMPTY;
    })
  ); ;

  constructor(private productService: ProductService) { }

  onSelected(productId: number): void {
    console.log('Not yet implemented');
  }
}
