import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RetailerAddress } from './addretaileraddress/addretaileraddress.component';
import { UpdAddressClass } from './addupdateaddress/addupdateaddress.component';

@Injectable({
  providedIn: 'root'
})
export class AddressupdateService {

  constructor(private http: HttpClient) {

  }
  updateAddressFunction(addrUpdate: UpdAddressClass): Observable<any> {
    let url = "http://localhost:8080/updateUserAddress";
    return this.http.post(url, addrUpdate);
  }

  updateRetailerAddress(addrRetailer: RetailerAddress): Observable<any> {
    let url = "http://localhost:8080/updateRetailerAddress";
    return this.http.post(url, addrRetailer);
  }
}
