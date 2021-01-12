import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from './login/login.component';
import { Customer } from './register/register.component';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  register(customer:Customer){
    let url="http://localhost:8085/spring-rest-mvc/api/register";
    return this.http.post(url,customer);
  }
  login(login:Login){
    let url="http://localhost:8085/spring-rest-mvc/api/login";
    return this.http.post(url,login);
  }
}
