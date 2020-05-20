import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../geo-chart/country.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GeoChartService } from '../geo-chart/geo-chart.service';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor(private http: HttpClient, private geoService: GeoChartService) { }

  state = '';
  ngOnInit(): void {
    this.geoService.selectedState.subscribe(res => {
      this.state = res;
    })
  }

  findDataByState(data: string): Observable<Country[]> {

    return this.http.get<Country[]>('https://covidtracking.com/api/v1/states/' + data + '/current.json');
  };

}
