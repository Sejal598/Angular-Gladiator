import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() { }
  imgId:string;
  imgUrl:string;
  approvalId:string;
}
