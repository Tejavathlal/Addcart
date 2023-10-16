import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/Services/apiservice.service';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

   public products: any= [];

   public grandtotal: number = 0;

  constructor (private cartService:CartService){
    
  }

 ngOnInit(): void {
    this.cartService.getproduct().subscribe(
      (data:any)=>{
        this.products= data;
        this.grandtotal = this.cartService.getTotalPrice()
      }
    )
 }
  
 removeitem(item:any){
  this.cartService.removecart(item);
 }

 emptycart(){
  this.cartService.removeAllcart();
 }
}
