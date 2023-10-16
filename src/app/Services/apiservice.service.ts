import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private httpClient: HttpClient) {} 

  getallproduct(): Observable<any> {
    return this.httpClient.get("https://fakestoreapi.com/products/");
  }


}
