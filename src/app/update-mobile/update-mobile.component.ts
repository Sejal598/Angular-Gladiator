import { Component, OnInit } from '@angular/core';
import { MobileupdateService } from '../mobileupdate.service';

@Component({
  selector: 'app-update-mobile',
  templateUrl: './update-mobile.component.html',
  styleUrls: ['./update-mobile.component.css']
})
export class UpdateMobileComponent {

  updateMob: UpdateMobile = new UpdateMobile();
  message: string;
  constructor(private mobileupdateService: MobileupdateService) { }
  updateMobile() {
    this.updateMob.id = "USR-01";
    alert(JSON.stringify(this.updateMob));
    this.mobileupdateService.updateMobileFunction(this.updateMob).subscribe(response => {
      console.log(response);
      if (response.status == 'SUCCESS') {
        this.message = "Updation Success";
      }
    })
  }

}

export class UpdateMobile {
  mobileNumber: string;
  id: string;
}
