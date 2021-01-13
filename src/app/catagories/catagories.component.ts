import { Product } from './../Product.model';
import { Router } from '@angular/router';
import { ProductService } from '../ProductService.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catagories',
  templateUrl: './catagories.component.html',
  styleUrls: ['./catagories.component.css']
})
export class CatagoriesComponent implements OnInit {

  constructor(private prodS:ProductService) { }

categories=['mobile','shoes','appliances','cloths','grocreies','others']

products:Product[]

  ngOnInit(): void {

  }

  onclick(category){

    this.prodS.SearchbyCatagory(category).subscribe(e=>{
      // this.prodS.Products.next(e);
      this.products=e
    })

  }


}
