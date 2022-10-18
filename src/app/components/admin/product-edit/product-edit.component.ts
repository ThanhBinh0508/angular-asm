import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  product!: IProduct
  constructor(
    private productService:ProductService,
    private activateRoute:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      const id = params['id'];
      if (params) {
      
        this.productService.getProduct(id).subscribe(item => {
          this.product = item;
        })
      }
    });
  }
  onHandleEdit() {
    this.productService.updateProduct(this.product).subscribe(item => {
      this.router.navigateByUrl(`/`)
    })
  }
}
