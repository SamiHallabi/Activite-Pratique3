import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Product {
  products = [
    { id: 1, name: 'Product 1', price: 10.99 , selected: true},
    { id: 2, name: 'Product 2', price: 19.99, selected: false },
    { id: 3, name: 'Product 3', price: 5.99, selected: true },
  ];

  getAllProducts() {
    return this.products;
  }

  deleteProduct(product: any) {
    let v = confirm(`Are you sure you want to delete ${product.name}?`);
    if (v) {
      this.products = this.products.filter(p => p.id !== product.id);
    }
  }
}
