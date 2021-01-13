import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-catagory',
  templateUrl: './catagory.component.html',
  styleUrls: ['./catagory.component.css']
})
export class CatagoryComponent implements OnInit {

@Input() val:string;

  constructor() { }

  ngOnInit(): void {
  }

}
