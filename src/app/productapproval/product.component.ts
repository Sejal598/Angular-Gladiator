import { Component, OnInit } from '@angular/core';
import { ApprovalService } from '../Model/approval.service';
import { ProductdetailsService } from '../Model/productdetails.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product:ProductdetailsService=new ProductdetailsService();
  constructor(private approval:ApprovalService) { }

  ngOnInit(): void {
  }
  
  register(){
    alert(JSON.stringify(this.product));
    this.approval.register(this.product).subscribe(response=>{
    })
   
  }
  

}
