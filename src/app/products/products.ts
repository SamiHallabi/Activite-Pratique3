import { Component, OnInit } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [NgForOf , NgIf],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {
  products!: Array<any>;
  constructor() {

  }

  ngOnInit() {
    this.products = [
      { id: 1, name: 'Product 1', price: 10.99 , selected: true},
      { id: 2, name: 'Product 2', price: 19.99, selected: false },
      { id: 3, name: 'Product 3', price: 5.99, selected: true },
    ];
  }
}

