import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WishListDto } from './wish-list/wish-list.component';

@Injectable({
  providedIn: 'root'
})
export class WishListService {
  wishList: WishListDto;
  constructor(private http: HttpClient) { }

  fetchWishList(userId: string): Observable<any> {
    let url = "http://localhost:8080/fetchWishList/" + userId;
    this.wishList = { "userId": userId };
    return this.http.post(url, this.wishList);
  }

}
