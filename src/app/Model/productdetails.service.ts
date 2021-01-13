import { Injectable } from '@angular/core';
import { ImageService } from './image.service';

@Injectable({
  providedIn: 'root'
})
export class ProductdetailsService {

  constructor() { }
  productId:string;
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
  images:ImageService[]=[];
}
