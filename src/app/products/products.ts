import { Component, OnInit } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import { Product } from '../services/product';
import { createResponse } from '@angular/cli/src/commands/mcp/tools/onpush-zoneless-migration/prompts';

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
   this.productService.getAllProducts().subscribe({
      next : resp => {
        this.products = resp;
      },
      error : err => {
        console.log(err);
      }
   });
  }

  protected handleDelete(product: any) {
    let v = confirm(`Are you sure you want to delete ${product.name}?`);
    if (v) {
      this.productService.deleteProduct(product).subscribe({
        next : () => {
          this.getAllProducts();
        },
        error : err => {
          console.log(err);
        }
      });
    }
  }
}

