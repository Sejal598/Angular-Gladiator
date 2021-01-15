import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ProductdetailsService } from './productdetails.service';

@Injectable({
  providedIn: 'root'
})
export class ApprovalService {

  constructor(private http:HttpClient) { }
  register(product:any):Observable<any>{
    let url="http://localhost:8080/addProduct";
    return this.http.post(url,product);
  }
}
