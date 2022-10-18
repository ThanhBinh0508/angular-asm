import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
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
  // productForm = new FormGroup({
  //   name: new FormControl('', [Validators.required])
  // })
  constructor(
    private productService: ProductService,
    private router: Router,
    private validate: FormBuilder
  ) { }
  
  info = this.validate.group({
    "name": ["",[Validators.required]],
    "category": [""],
    "description": [""]
  })
  get form() {
    return this.info.controls
  }

  ngOnInit(): void {
  }
  onHandleAdd(){
    this.productService.addProduct(this.product).subscribe(item =>{
      this.router.navigateByUrl(`/`)
    })
  }
  onSubmit() {
    console.log('thanh cong');
    
  }
}
