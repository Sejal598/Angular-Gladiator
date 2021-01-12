import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ImageService } from './image.service';

@Injectable({
  providedIn: 'root'
})
export class ViewproductbysearchService {

  constructor(private http:HttpClient) { }

  searchProduct(field:string): Observable<any>{
    let url="http://localhost:8080/searchProduct?field="+field;
    return this.http.get(url);
  }

  viewImage(id:string):Observable<ImageService>{
    let url="http://localhost:8080/productImage?productId="+id;
    return this.http.get<ImageService>(url);
  }
  uploadImage(formData:FormData):Observable<any> {
    let url="http://localhost:8080/setImageForProduct";
    return this.http.post(url,formData);
  }
}
