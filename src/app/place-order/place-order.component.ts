import { Component, OnInit } from '@angular/core';
import { DisplayAddressService } from '../display-address.service';
import { PlaceorderService } from '../placeorder.service';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {
    response:any
    userId:String
     flag:boolean=false
     flag2:boolean
    Address:any
    addr: AddressClass = new AddressClass();
  constructor(private placeS:PlaceorderService,private addrDisplayService: DisplayAddressService) { }

  ngOnInit(): void {
  }
 addressReceive()
 {   
  this.userId = 'USR-01';
  this.addrDisplayService.displayAddressFunction(this.userId).subscribe(response => {
    this.Address = response;
    console.log(this.Address)
  });

}
addNew()
     {
       this.flag=true
     }
 select(address:any)
 {  this.flag2=true 
      
   this.addr.addrId=address.addressId 
   this.addr.userId="USR-01"
    this.addr.doorNo= address.doorNo;
  this.addr.street=address.street;
  this.addr.district=address.district;
  this.addr.state= address.state;
  this.addr.country=address.country;
  this.addr.pincode=address.pincode;

 }  
 addNewAddress()
  {  this.flag2=true

  }  
  placeOrder()
  {

    
      
      
      this.placeS.placeOrder(this.addr).subscribe(response => {
        console.log(response);
        
      })
    
  }

}
export class AddressClass {
  addrId:String=""
  userId:String="USR-01"
  doorNo:String
  street:String
  district:String
 
  state:String
  country:String
  pincode:number
}
