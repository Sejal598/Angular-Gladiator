import { Component, OnInit } from '@angular/core';
import { RetaileradminService } from '../retaileradmin.service';

@Component({
  selector: 'app-retailerlistdisplay',
  templateUrl: './retailerlistdisplay.component.html',
  styleUrls: ['./retailerlistdisplay.component.css']
})
export class RetailerlistdisplayComponent {

  retailDisp: RetailerClass;
  retailJson: string;
  constructor(private dispRetailer: RetaileradminService) { }

  dispRetailerDetails() {
    this.dispRetailer.fetchRetailerPending(this.retailDisp).subscribe(response => {
      console.log(response);
      this.retailJson = response;
    })
  }

  approvalRetailer(name: String, email: String, status: String) {
    // this.retailDisp.name = name;
    // this.retailDisp.email = email;
    // this.retailDisp.status = status;
    this.retailDisp = { "name": name, "email": email, "status": status };
    console.log(this.retailDisp);
    this.dispRetailer.updateRetailerStatus(name, email, status).subscribe(response => {
      alert(JSON.stringify(response));
    })
  }

}

export class RetailerClass {
  name: String;
  email: String;
  status: String;
}
