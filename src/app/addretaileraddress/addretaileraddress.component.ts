import { Component, OnInit } from '@angular/core';
import { AddressupdateService } from '../addressupdate.service';

@Component({
  selector: 'app-addretaileraddress',
  templateUrl: './addretaileraddress.component.html',
  styleUrls: ['./addretaileraddress.component.css']
})
export class AddretaileraddressComponent {
  message: string;
  retailerAddr: RetailerAddress = new RetailerAddress();
  constructor(private retailerAddress: AddressupdateService) { }

  updateRetailerAddress() {
    this.retailerAddr.retailerId = "RET-01";
    this.retailerAddress.updateRetailerAddress(this.retailerAddr).subscribe(response => {
      console.log(response);
      this.message = response.message;
    })
  }

}

export class RetailerAddress {
  address: string;
  retailerId: string;
}