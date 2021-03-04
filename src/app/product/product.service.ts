import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }

  getProduct() : Observable<any>{
    return this.http.get('http://localhost:3000/products');
  }

  addProduct(){}

  updateProduct(){}

  // deleteProduct(id) : Promise<> {
  //   let promise = new Promise((resolve, reject) => {
  //     return this.http.delete(` ${"http://localhost:3000/products"} + ${id}`).toPromise()
  //     .then(() => {
  //       this.getProduct();
  //     })
  //   })
  // }
}
