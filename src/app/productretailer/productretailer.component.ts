import { Component, OnInit } from '@angular/core';
import { ProductretailerService } from '../productretailer.service';

@Component({
  selector: 'app-productretailer',
  templateUrl: './productretailer.component.html',
  styleUrls: ['./productretailer.component.css']
})
export class ProductretailerComponent {
  productList: any;
  constructor(private productRetailerService: ProductretailerService) { }
  productRet: ProductRetailerClass = new ProductRetailerClass();
  displayProduct() {
    this.productRet.retailerId = "RET-01";
    this.productRetailerService.fetchProducts(this.productRet).subscribe(response => {
      console.log(response);
      this.productList = response;
    })
  }

}

export class ProductRetailerClass {
  retailerId: string;
}
