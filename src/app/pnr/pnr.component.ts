import { Component, OnInit } from '@angular/core';
import { PnrService } from '../pnr.service';

@Component({
  selector: 'app-pnr',
  templateUrl: './pnr.component.html',
  styleUrls: ['./pnr.component.css']
})
export class PnrComponent implements OnInit {

  pnrNo:number;
  constructor(private service:PnrService) { }
  data:any;
  ngOnInit(): void {
  }
 checkPnr(){
   alert(this.pnrNo);
   this.service.fetchpnrstatus(this.pnrNo).subscribe(data=>{
     this.data=data;
   // alert(JSON.stringify(data));
   })
 }

}
