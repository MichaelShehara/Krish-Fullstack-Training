import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../entity/order';

@Injectable({
  providedIn: 'root'
})
export class DispatchService {

  constructor(private http: HttpClient) { }

  // update
  dispatchOrder(data: Order): Observable<object> {
    return this.http.put(`http://localhost:8081/order`, data,{responseType: 'blob'});
  }
}
