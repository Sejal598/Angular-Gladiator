import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RetailerClass } from './retailerlistdisplay/retailerlistdisplay.component';

@Injectable({
  providedIn: 'root'
})
export class RetaileradminService {
  retailDisp: RetailerClass;

  constructor(private http: HttpClient) { }

  fetchRetailerPending(dispRetailer: RetailerClass): Observable<any> {
    let url = "http://localhost:8080/fetchRetailers/PENDING";
    return this.http.post(url, dispRetailer);
  }

  updateRetailerStatus(name: String, email: String, status: String): Observable<any> {
    let url = "http://localhost:8080/retailerApprovalStatus/" + email + "/" + status;
    console.log(url);
    this.retailDisp = { "name": name, "email": email, "status": status };
    return this.http.post(url, this.retailDisp);
  }
}
