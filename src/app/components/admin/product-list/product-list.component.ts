
import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  
  products: IProduct[] = [];
  message:String ="";
  constructor(private productSevice: ProductService) { }

  ngOnInit(): void {
    this.productSevice.getProducts().subscribe((data) =>{
      this.products = data
    },error =>{
      this.message=error.message
    })
  }
  remove(id:number){
    this.productSevice.removeProduct(id).subscribe(()=>{
      this.products=this.products.filter(item => item.id !==id)
    })
  }

  searchText: string = '';

  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
    console.log(this.searchText);
    
  }
}
