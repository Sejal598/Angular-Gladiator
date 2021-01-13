import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UpdAddressClass } from './addupdateaddress/addupdateaddress.component';
@Injectable({
  providedIn: 'root'
})
export class DisplayAddressService {

  constructor(private http: HttpClient) { }

  displayAddressFunction(userId: String): Observable<any> {
    let url = "http://localhost:8080/fetchUserAddress/" + userId;
    return this.http.post(url, userId);
  }
}
