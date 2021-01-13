import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddressClass } from './place-order/place-order.component';

@Injectable({
  providedIn: 'root'
})
export class PlaceorderService {

  constructor(private httpclient:HttpClient) { }
 placeOrder(order:AddressClass){
   console.log(order)
  return this.httpclient.post("http://localhost:8080/addOrder",order);
 }



}




