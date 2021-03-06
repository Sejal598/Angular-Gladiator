import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { PicUploadComponent } from './pic-upload/pic-upload.component';
import { ProductComponent } from './productapproval/product.component';
import { RegisterComponent } from './register/register.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { DisplayAddressComponent } from './display-address/display-address.component';
import { UserprofilecontainerComponent } from './userprofilecontainer/userprofilecontainer.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddupdateaddressComponent } from './addupdateaddress/addupdateaddress.component';
import { UpdateMobileComponent } from './update-mobile/update-mobile.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { RetailerprofileComponent } from './retailerprofile/retailerprofile.component';
import { AddretaileraddressComponent, RetailerAddress } from './addretaileraddress/addretaileraddress.component';
import { UpdateretailermobileComponent } from './updateretailermobile/updateretailermobile.component';
import { ProductretailerComponent } from './productretailer/productretailer.component';
import { RetailerprofilecontainerComponent } from './retailerprofilecontainer/retailerprofilecontainer.component';

const routes: Routes = [{ path: 'dashboard', component: DashboardComponent },
{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent },
{ path: 'addproduct', component: ProductComponent },
{ path: 'pic-upload', component: PicUploadComponent },
{ path: 'dashboard/view-profile', component: ViewProfileComponent },
{ path: 'userprofile', component: UserprofileComponent },
{ path: 'displayaddress', component: DisplayAddressComponent },
{ path: 'userprofilecontainer', component: UserprofilecontainerComponent },
{ path: 'wishlist', component: WishListComponent },
{ path: 'addaddress', component: AddupdateaddressComponent },
{ path: 'addmobile', component: UpdateMobileComponent },
{ path: 'changepassword', component: ChangepasswordComponent },
{ path: 'retailerprofile', component: RetailerprofileComponent },
{ path: 'addretaileraddress', component: AddretaileraddressComponent },
{ path: 'addretailermobile', component: UpdateretailermobileComponent },
{ path: 'displayretailerproducts', component: ProductretailerComponent },
{ path: 'retailerprofilecontainer', component: RetailerprofilecontainerComponent },
{ path: 'addupdateproduct', component: ProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents = [DashboardComponent, LoginComponent, ProductComponent, RegisterComponent, PicUploadComponent, ViewProfileComponent, UserprofileComponent, DisplayAddressComponent, UserprofilecontainerComponent, UpdateMobileComponent, AddupdateaddressComponent, WishListComponent, ChangepasswordComponent, RetailerprofileComponent, UpdateretailermobileComponent, AddretaileraddressComponent, ProductretailerComponent, RetailerprofilecontainerComponent]