import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private http: HttpClient) { }

  // create
  createInventoryRecord(data: any): Observable<any> {
    return this.http.post(`http://localhost:8888/assignFuel/`, data);
  }
}
