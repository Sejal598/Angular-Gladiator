import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class CartService{
constructor(private http:HttpClient){

}
//view cart(not now)

//addd cart, updatecart("/addcart")

addtocart(productId:String){

    return this.http.post<any>('http://localhost:8080/addCart',{
        userId:'USR-01',
        productId:productId,
        quantity:1
    }).pipe(catchError(err=>{
        return throwError(err);
    }))
}
fetch(){

    return this.http.post<any>('http://localhost:8080/fetchCart',{"userId":"USR-01"}).pipe(catchError(err=>{
        return throwError(err);
    }))
     }
Order()
{ return this.http.post<any>('http://localhost:8080/addOrder',{ "addrId":"ADR-101", 
"userId":"USR-01",
"doorNo":"121",
"street":"Chandni Chok",
"district":"Mandla",

"state":"MP",
"country":"India",
"pincode":481661
}).pipe(catchError(err=>{
    return throwError(err);
     }))


}







}