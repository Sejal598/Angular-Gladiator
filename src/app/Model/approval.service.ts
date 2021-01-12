import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductdetailsService } from './productdetails.service';

@Injectable({
  providedIn: 'root'
})
export class ApprovalService {

  constructor(private http:HttpClient) { }
  register(product:ProductdetailsService){
    let url="http://localhost:8080/addProduct";
    return this.http.post(url,product);
  }
}
