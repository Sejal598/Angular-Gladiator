import { Component, OnInit } from '@angular/core';
import { DisplayAddressService } from '../display-address.service';
import { UpdAddressClass } from '../addupdateaddress/addupdateaddress.component';

@Component({
  selector: 'app-display-address',
  templateUrl: './display-address.component.html',
  styleUrls: ['./display-address.component.css']
})
export class DisplayAddressComponent {
  resp: String;
  dispAddr: UpdAddressClass = new UpdAddressClass();
  userId: string;
  constructor(private addrDisplayService: DisplayAddressService) { }

  dispAddress() {
    this.userId = 'USR-01';
    this.addrDisplayService.displayAddressFunction(this.userId).subscribe(response => {
      this.resp = response;
    });

  }


}
