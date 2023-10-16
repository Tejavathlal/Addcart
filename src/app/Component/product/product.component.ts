import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/Services/apiservice.service';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public productList: any;
  public searchkey: string = "";
  public filterCategory: any;

  constructor(private productService: ApiserviceService, private cartService: CartService) { }

  ngOnInit(): void {
    this.productService.getallproduct().subscribe(
      (data: any) => {
        this.productList = data;
        this.filterCategory= data;
        this.productList.forEach((a: any) => {
          if (a.category === "women's clothing" || a.category === "men's clothing") {
            a.category = "fashion"
          }
          Object.assign(a, { quantity: 1, total: a.price }
          );
          console.log(this.productList);
        });
        this.cartService.search.subscribe(
          (val => {
            this.searchkey = val;
          })
        )
      },
      (err: any) => {
        alert("Internal Service Error");
      }
    )
  }
  addtocart(item: any) {
    this.cartService.addtocart(item)
  }
  filter(category:string){
    this.filterCategory = this.productList
    .filter((a:any)=>{
      if(a.category == category || category== ""){
        return a;
      }
    })
  }
}
