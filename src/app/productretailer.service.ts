import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductRetailerClass } from './productretailer/productretailer.component';

@Injectable({
  providedIn: 'root'
})
export class ProductretailerService {

  constructor(private http: HttpClient) { }

  fetchProducts(productRetail: ProductRetailerClass): Observable<any> {
    let url = "http://localhost:8080/displayRetailerProducts/" + productRetail.retailerId;
    return this.http.post(url, productRetail);
  }
}
