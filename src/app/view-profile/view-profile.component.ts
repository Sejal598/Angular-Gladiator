import { Component, OnInit } from '@angular/core';
import { ImageService } from '../Model/image.service';
import { ViewproductbysearchService } from '../Model/viewproductbysearch.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {

  image:ImageService=new ImageService();
  constructor(private viewproductbysearchService:ViewproductbysearchService) { }

  ngOnInit(): void {
    this.viewproductbysearchService.viewImage("MOB-05").subscribe(response=>{
      this.image=response;
    })
  }


}

