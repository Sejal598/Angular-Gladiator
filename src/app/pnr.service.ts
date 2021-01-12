import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PnrService {

  constructor(private http:HttpClient) { }

  fetchpnrstatus(pnrNo:number):Observable<any>{
    let url="http://localhost:8085/spring-rest-mvc/api/pnr?q="+pnrNo;
    return this.http.get(url);
  }
}
