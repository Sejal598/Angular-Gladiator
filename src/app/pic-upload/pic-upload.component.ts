import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewproductbysearchService } from '../Model/viewproductbysearch.service';

@Component({
  selector: 'app-pic-upload',
  templateUrl: './pic-upload.component.html',
  styleUrls: ['./pic-upload.component.css']
})
export class PicUploadComponent implements OnInit {

  imagePic:any;//file
  approvalId:any;//number
  message:string;
  constructor(private viewproductbysearchService:ViewproductbysearchService,private router:Router) { }

  ngOnInit(): void {
    this.approvalId=sessionStorage.getItem('approvalId');
  }
  onFileChange(event){
    this.imagePic=event.target.files[0];
  }
  upload(){
    let formData:FormData=new FormData();
    formData.append('approvalId',this.approvalId);
    formData.append('imagePic',this.imagePic);
    this.viewproductbysearchService.uploadImage(formData).subscribe(response => {
      alert(JSON.stringify(response));
  })

}
}
