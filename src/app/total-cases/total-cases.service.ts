import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SummaryCases } from './total-cases.interface';

@Injectable({
  providedIn: 'root'
})
export class TotalCasesService {

  constructor(private http: HttpClient) { }

  getData(): Observable<SummaryCases[]> {
    return this.http.get<SummaryCases[]>('https://covidtracking.com/api/v1/us/current.json');
  }
}
