import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProductListComponent } from './components/admin/product-list/product-list.component';
import { ProductAddComponent } from './components/admin/product-add/product-add.component';
import { HomeComponent } from './components/client/home/home.component';
import { ProductEditComponent } from './components/admin/product-edit/product-edit.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { DetailProductComponent } from './components/admin/detail-product/detail-product.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ProductListComponent,
    ProductAddComponent,
    HomeComponent,
    ProductEditComponent,
    DetailProductComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
