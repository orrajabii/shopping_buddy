import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RepeatPipe } from './navbar/repeat.pipe';
import { CategoryPipe } from './products/category.pipe';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductsComponent } from './products/products.component';
import { ProductpageComponent } from './products/productpage/productpage.component';
import { SignoutComponent } from './signout/signout.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { ProductComponent } from './products/products-list/product/product.component';
import { CategoryService } from './app-services/category.service';
import { ProductsService } from './app-services/products.service';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { TermsComponent } from './terms/terms.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { UserListComponent } from './user-list/user-list.component';
import { AdminSettingsComponent } from './admin-settings/admin-settings.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    RepeatPipe,
    CategoryPipe,
    HomepageComponent,
    ProductsComponent,
    ProductpageComponent,
    SignoutComponent,
    CheckoutComponent,
    ProductsListComponent,
    ProductComponent,
    CartComponent,
    PaymentComponent,
    AddproductComponent,
    AboutusComponent,
    TermsComponent,
    UserDashboardComponent,
    AdminDashboardComponent,
    UserSettingsComponent,
    UserListComponent,
    AdminSettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'', redirectTo:'home', pathMatch:'full'},
      {path:'home', component: HomepageComponent},
      {path:'products', component: ProductsComponent},
      {path:'products/:id', component: ProductsComponent},
        {path: 'products/product/:id', component:ProductpageComponent},
        {path: 'signout', component: SignoutComponent},
        {path: 'checkout', component: CheckoutComponent},
        {path:'cart', component: CartComponent},
        {path:'payment', component: PaymentComponent},
        {path:'aboutus', component: AboutusComponent},
        {path:'terms', component: TermsComponent},
        {path:'addproduct', component: AddproductComponent},
        {path:'user-dashboard', component: UserDashboardComponent},
        {path:'admin-dashboard', component: AdminDashboardComponent},
        {path:'user-settings', component: UserSettingsComponent},
        {path:'user-list', component: UserListComponent},
        {path:'admin-settings', component: AdminSettingsComponent}
    ])
  ],
  providers: [CategoryService, ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
