import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent implements OnInit {
  products: IProduct[] = [];
  message:String ="";
  product:IProduct = {
    id:0,
    name:"",
    originalPrice: 0,
    image: "",
    saleOffPrice: 0,
    category: "",
    description: "",
    shortDescription: ""
  }
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      if (params) {
        this.productService.getProduct(id).subscribe(item => {
          this.product = item;
          
        })
      }
    });

    this.productService.getProducts().subscribe((data) => {
      this.products = data
    }, error => {
      this.message=error.message
    })

  }

  

}