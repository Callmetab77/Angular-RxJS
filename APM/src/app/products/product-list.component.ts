import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';

import { catchError, EMPTY, Observable, tap } from 'rxjs';
import { ProductCategory } from '../product-categories/product-category';

import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent {
  pageTitle = 'Product List';
  errorMessage = '';
  categories: ProductCategory[] = [];

  products$ = this.productService.products$.pipe(
    tap(() => {
      console.log('LOADING FALSE');    
    }), 
    catchError(err=>{
      this.errorMessage = err;
      console.log('this.errorMessage = err;', this.errorMessage)
      return EMPTY;
    })
  ); ;

  constructor(private productService: ProductService) { }

  // ngOnInit(): void {
  //   this.products$ = this.productService.getProducts().pipe(
  //     tap( () => {
  //       console.log('LOADING FALSE');    
  //     }
            
  //     ), 
  //     catchError(err=>{
  //       this.errorMessage = err;
  //       console.log('this.errorMessage = err;', this.errorMessage)
  //       return EMPTY;
  //     })
  //   ); 
  // }

  onAdd(): void {
    console.log('Not yet implemented');
  }

  onSelected(categoryId: string): void {
    console.log('Not yet implemented');
  }
}
