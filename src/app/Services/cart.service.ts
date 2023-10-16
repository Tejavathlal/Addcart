import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  

  private cardItemList: any[]= [];

  private productList= new BehaviorSubject<any[]>([]);
  public search = new BehaviorSubject<string>("");

  constructor() { }

  getproduct(){
   return this.productList.asObservable();
  }

  setproduct(product:any){
    this.cardItemList.push(...product);
    this.productList.next(product);

  }

  addtocart(product:any){
    this.cardItemList.push(product);
    this.productList.next(this.cardItemList);
    this.getTotalPrice()
    console.log(this.cardItemList);

    
  }

  getTotalPrice() : number{
    let grandTotal = 0;
    this.cardItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;

  }
  removecart(product:any){
    this.cardItemList.map((a:any, index:any)=>{
   if(product.id === a.id){
    this.cardItemList.splice(index,1)
   }
    });
    this.productList.next(this.cardItemList);
  }
  removeAllcart(){
    this.cardItemList = [];
    this.productList.next(this.cardItemList);
  }
}
