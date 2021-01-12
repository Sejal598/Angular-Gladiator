import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login:Login=new Login();
  message:string;
  constructor(private customerService:CustomerService,private router:Router) { }

  ngOnInit(): void {
  }
  loginCheck(){
    alert(JSON.stringify(this.login));
    this.customerService.login(this.login).subscribe((response:any)=>{
      //alert(JSON.stringify(response));
      console.log(response);
      if(response.status=='SUCCESS'){
        let customerId=response.customerId;
        let customerName=response.customerName;

        sessionStorage.setItem('customerId',String(customerId));
        sessionStorage.setItem('customerName',String(customerName));

        this.router.navigate(['dashboard']);
      }
      else
        this.message=response.message;
    })
  }
}
export class Login{
    email:string;
    password:string;
}
