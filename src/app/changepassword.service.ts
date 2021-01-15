import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { changePasswordClass } from './changepassword/changepassword.component';

@Injectable({
  providedIn: 'root'
})
export class ChangepasswordService {

  constructor(private http: HttpClient) { }

  changePassword(changePass: changePasswordClass): Observable<any> {
    let url = "http://localhost:8080/changePassword/User";
    return this.http.post(url, changePass);
  }
}
