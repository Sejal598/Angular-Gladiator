import { Component, OnInit } from '@angular/core';
import { MobileupdateService } from '../mobileupdate.service';
import { UpdateMobile } from '../update-mobile/update-mobile.component';

@Component({
  selector: 'app-updateretailermobile',
  templateUrl: './updateretailermobile.component.html',
  styleUrls: ['./updateretailermobile.component.css']
})
export class UpdateretailermobileComponent {
  message: string;
  constructor(private updateMobile: MobileupdateService) { }
  mobileretail: UpdateMobile = new UpdateMobile();
  updateRetailerMobile() {
    this.mobileretail.id = "RET-01";
    this.updateMobile.updateRetailerMobile(this.mobileretail).subscribe(response => {
      console.log(response);
      this.message = response.message;
    })
  }

}
