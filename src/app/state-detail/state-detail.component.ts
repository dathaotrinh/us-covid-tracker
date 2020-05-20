import { Component, OnInit } from '@angular/core';
import { GeoChartService } from '../geo-chart/geo-chart.service';
import { StateService } from './state.service';

@Component({
  selector: 'app-state-detail',
  templateUrl: './state-detail.component.html',
  styleUrls: ['./state-detail.component.css']
})
export class StateDetailComponent implements OnInit {

  constructor(private geoService: GeoChartService, private stateService: StateService) { }
  state = '';
  countryList = [];
  ngOnInit(): void {
    this.geoService.selectedState.subscribe(res => {
      this.state = res;
      this.stateService.findDataByState(this.state).subscribe(res => {
        console.log(res);
    })});

    this.geoService.getDailyReportByCountry()
      .subscribe(res => {
        this.countryList.push(...res);
      });
    }

}
