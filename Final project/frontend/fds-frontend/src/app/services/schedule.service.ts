import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private http: HttpClient) { }

  assignTransport(data: any): Observable<any> {
    return this.http.post(`http://localhost:5353/assignVehicle/`, data);
  }
}
