import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductdetailsService {

  constructor() { }
  name:string;
  category:string;
  color:string;
  brand:string;
  price:number;
  quantity:number;
  discountInPercent:number;
  searchDescriptionjson:number;
  retailer:string;
  product:string;
}
