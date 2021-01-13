import { Component, OnInit } from '@angular/core';
import { CartService } from '../Cartservice.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
CartItems:any
flag:boolean=false
  constructor(private cartservice:CartService) { }

  ngOnInit(): void {
       this.cartservice.fetch().subscribe(response=>{
           this.CartItems=response;
          console.log(response);
          


       });
   }
   onShow(){
    this.flag=!this.flag;
    this.cartservice.fetch().subscribe(response=>{
      this.CartItems=response;
     console.log(response);})


}
onOrder()
{   this.cartservice.Order().subscribe(response=>{
  this.flag=!this.flag;
  this.CartItems=response;
 console.log(response);})

}
   
  
  }
  


