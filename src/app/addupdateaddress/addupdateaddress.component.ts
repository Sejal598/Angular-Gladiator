import { Component, OnInit } from '@angular/core';
import { AddressupdateService } from '../addressupdate.service';

@Component({
  selector: 'app-addupdateaddress',
  templateUrl: './addupdateaddress.component.html',
  styleUrls: ['./addupdateaddress.component.css']
})
export class AddupdateaddressComponent {

  addrUpdate: UpdAddressClass = new UpdAddressClass();
  message: string;
  constructor(private addUpdateService: AddressupdateService) { }

  updateAddress() {
    this.addrUpdate.userId = "USR-02";
    alert(JSON.stringify(this.addrUpdate));
    this.addUpdateService.updateAddressFunction(this.addrUpdate).subscribe(response => {
      console.log(response);
      if (response.status == 'SUCCESS') {
        this.message = "Updation Success";
      }
      else if (response.status == 'FAILURE') {
        this.message = "Updation Failure";
      }
    });
  }


}

export class UpdAddressClass {
  userId: string;
  doorNo: string;
  street: string;
  district: string;
  state: string;
  country: string;
  pincode: number;
}
