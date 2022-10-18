import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailProductComponent } from './components/admin/detail-product/detail-product.component';
import { ProductAddComponent } from './components/admin/product-add/product-add.component';
import { ProductEditComponent } from './components/admin/product-edit/product-edit.component';
import { ProductListComponent } from './components/admin/product-list/product-list.component';
import { HomeComponent } from './components/client/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: "/home", pathMatch: 'full' },
  { path: 'home', component: ProductListComponent },
  { path: 'product/:id/detail', component: DetailProductComponent },
  { path: 'product/add', component: ProductAddComponent },
  { path: 'product/:id/edit', component: ProductEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
