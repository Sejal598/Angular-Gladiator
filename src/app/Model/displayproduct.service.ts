import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisplayproductService {

  constructor() { }
  productId:string;
  name:string;
  tags:string;
  category:string;
  color:string;
  brand:string;
  price:number;
  quantity:number;
  discountInPercent:number;
  searchDescriptionjson:string;
  retailer:String;

}
