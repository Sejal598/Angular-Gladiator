import { CatagoryComponent } from './catagories/catagory/catagory.component';
import { ProductService } from './ProductService.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PnrComponent } from './pnr/pnr.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PicUploadComponent } from './pic-upload/pic-upload.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './productapproval/product.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { CartComponent } from './cart/cart.component';
import { CartService } from './Cartservice.service';
import { SortpipePipe } from './sortpipe.pipe';
import { CatagoriesComponent } from './catagories/catagories.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { DisplayAddressComponent } from './display-address/display-address.component';
import { UpdateMobileComponent } from './update-mobile/update-mobile.component';
import { AddupdateaddressComponent } from './addupdateaddress/addupdateaddress.component';
import { UserprofilecontainerComponent } from './userprofilecontainer/userprofilecontainer.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { DisplayOrderComponent } from './display-order/display-order.component';


@NgModule({
  declarations: [
    AppComponent,
    PnrComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    PicUploadComponent,
    ViewProfileComponent,
    ProductComponent,
    ViewproductComponent,
    CartComponent,
    SortpipePipe,
    CatagoriesComponent,
    CatagoryComponent,
    UserprofileComponent,
    WishListComponent,
    DisplayAddressComponent,
    UpdateMobileComponent,
    AddupdateaddressComponent,
    UserprofilecontainerComponent,
    PlaceOrderComponent,
    DisplayOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [CartService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
