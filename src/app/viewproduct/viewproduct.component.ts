import { Component, OnInit } from '@angular/core';
import { CartService } from '../Cartservice.service';
import { DisplayproductService } from '../Model/displayproduct.service';
import { ImageService } from '../Model/image.service';
import { ViewproductbysearchService } from '../Model/viewproductbysearch.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {

  field:string;
  constructor(private viewproductbysearch:ViewproductbysearchService,private cartS :CartService) { }
  productlist:DisplayproductService[]=[];
  ngOnInit(): void {
  }
  search(){
    alert(this.field);
    this.viewproductbysearch.searchProduct(this.field).subscribe(response=>{
      this.productlist=response;
      console.log(this.productlist);
    })
  }
  onclick(productId){
    this.cartS.addtocart(productId).subscribe(e=>{
        alert(e.message)
      
    })
  }
}
