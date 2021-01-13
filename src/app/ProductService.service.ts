import { Product } from './Product.model';
import { catchError } from 'rxjs/operators';
import { throwError, Subject, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService{

Products=new BehaviorSubject<Product[]>([])
product=new BehaviorSubject<Product>(null)

constructor(private http:HttpClient){}

SearchbyTags(Searchfield){

return this.http.get<Product[]>("http://localhost:8080/searchProductByTag?field="+Searchfield)
         .pipe(catchError(err=>{
             //disply not found card!!!!!!
               return throwError(err);
               }))

}


SearchbyCatagory(category){
    return this.http.get<Product[]>('http://localhost:8080/searchProductByCategory?category='+category).pipe(catchError(e=>{
        //display error page
        return throwError(e);
    }))
}


SearchbyID(productId){
    return this.http.get<Product>('http://localhost:8080/searchProductById?productId='+productId).pipe(catchError(e=>{
        //display error page
        return throwError(e);
    }))
}



}