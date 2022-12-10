import { Injectable } from '@angular/core';
import { Product } from './model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Product[] {
    return [
      {
        name: "Product 1",
        category: "Kategoria 1",
        desciption: "Opis produktu 1",
        price: 11.99,
        currency: "PLN"
      },
      {
        name: "Product 2",
        category: "Kategoria 2",
        desciption: "Opis produktu 3",
        price: 15.99,
        currency: "PLN"
      },
      {
        name: "Product 3",
        category: "Kategoria 2",
        desciption: "Opis produktu 3",
        price: 19.99,
        currency: "PLN"
      }
    ];
  }
}
