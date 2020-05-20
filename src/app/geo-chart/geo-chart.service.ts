import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from './country.interface';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GeoChartService {

  selectedState = new Subject<string>();
  constructor(private http: HttpClient) { }

  getDailyReportByCountry(): Observable<Country[]> {
    return this.http.get<Country[]>('https://covidtracking.com/api/v1/states/current.json')
      .pipe(
        map(res => {
        return res.map(ele => {
          return {
            state: ele.state ,
            positive: ele.positive != null ? ele.positive : 0,
            negative: ele.negative != null ? ele.negative : 0,
            death: ele.death != null ? ele.death : 0,
            recovered: ele.recovered != null ? ele.recovered : 0,
            totalTestResults: ele.totalTestResults != null ? ele.totalTestResults : 0,
            hospitalizedCurrently:ele.hospitalizedCurrently != null ? ele.hospitalizedCurrently : 0,
            hospitalizedCumulative:ele.hospitalizedCumulative != null ? ele.hospitalizedCumulative : 0,
          }
        })
      }));
  }



}
