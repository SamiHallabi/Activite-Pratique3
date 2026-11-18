import { Component, OnInit } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import { Product } from '../services/product';

@Component({
  selector: 'app-products',
  imports: [NgForOf , NgIf],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {
  products!: Array<any>;
  constructor(private productService: Product) {



  }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    this.products = this.productService.getAllProducts();
  }

  protected handleDelete(product: any) {
    let v = confirm(`Are you sure you want to delete ${product.name}?`);
    if (v) {
      this.productService.deleteProduct(product);
      this.getAllProducts();
    }
  }
}

