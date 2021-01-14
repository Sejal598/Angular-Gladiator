import { Injectable } from '@angular/core';
import { UpdateMobile } from './update-mobile/update-mobile.component'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MobileupdateService {

  constructor(private http: HttpClient) { }

  updateMobileFunction(updateMob: UpdateMobile): Observable<any> {
    let url = "http://localhost:8080/UpdateMobile/User";
    return this.http.post(url, updateMob)
  }

  updateRetailerMobile(updateRet: UpdateMobile): Observable<any> {
    let url = "http://localhost:8080/UpdateMobile/Retailer";
    return this.http.post(url, updateRet);
  }
}
