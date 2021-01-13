import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  customer:Customer=new Customer();
  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
  }
  register(){
    alert(JSON.stringify(this.customer));
    this.customerService.register(this.customer).subscribe(response=>{
      alert(JSON.stringify(response));
    })
  }
}
export class Customer{
    name:string;
    dateOfBirth:Date;
    email:string;
    password:string;
}
