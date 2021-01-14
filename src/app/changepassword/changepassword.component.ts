import { Component } from '@angular/core';
import { ChangepasswordService } from '../changepassword.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent {

  changePass: changePasswordClass = new changePasswordClass();
  message: string;
  constructor(private changePassService: ChangepasswordService) { }

  changePassword() {
    this.changePass.id = "USR-02";
    this.changePassService.changePassword(this.changePass).subscribe(response => {
      console.log(response);
      this.message = response.message;
      this.changePass.newPass = "";
      this.changePass.oldPass = "";
    })
  }

}

export class changePasswordClass {
  id: string;
  oldPass: string;
  newPass: string;
}
