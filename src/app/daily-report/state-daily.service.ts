import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GeoChartService } from '../geo-chart/geo-chart.service';
import { DailyState } from './daily-report.interface';

@Injectable({
  providedIn: 'root'
})
export class StateDailyService  {

  constructor(private http: HttpClient, private geoService: GeoChartService) { }

  getStateDailyReport(state) {
      return this.http.get<DailyState[]>('https://covidtracking.com/api/v1/states/' + state + '/daily.json')
  }
}
