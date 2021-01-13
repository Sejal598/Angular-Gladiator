import { Component, OnInit } from '@angular/core';
import { WishListService } from '../wish-list.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent {
  wishList: WishListDto;
  items: any;
  userId: string;
  constructor(private wishListService: WishListService) { }

  displayWishList() {
    this.userId = "USR-02";
    console.log(this.userId);
    this.wishListService.fetchWishList(this.userId).subscribe(response => {
      this.items = response;
      console.log(response);
    });
  }

}

export class WishListDto {
  userId: string;
}