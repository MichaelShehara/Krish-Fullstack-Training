import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../entity/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private http: HttpClient) { }

  // get
  getOrder(id: number): Observable<Order> {
    return this.http.get<Order>(`http://localhost:8080/order/${id}`);
  }

  // get order by name
  getOrderListByName(data: any): Observable<Order> {
    return this.http.get<Order>(`http://localhost:8080/order?name=`+ data);
  }

  // create
  createOrder(data: any): Observable<any> {
    return this.http.post(`http://localhost:8080/order/`, data);
  }

  // getall
  getOrderList(): Observable<any> {
    return this.http.get(`http://localhost:8080/order/`);
  }

  // update
  updateOrder(data: any): Observable<object> {
    return this.http.put(`http://localhost:8080/order/`, data);
  }
} 
