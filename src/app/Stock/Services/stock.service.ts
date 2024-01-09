import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  private apiUrl = 'http://localhost:5000/api/market'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  getStocks(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }
}
