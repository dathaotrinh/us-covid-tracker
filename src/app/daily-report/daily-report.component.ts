import { Component, OnInit } from '@angular/core';
import { GeoChartService } from '../geo-chart/geo-chart.service';
import { StateDailyService } from './state-daily.service';

@Component({
  selector: 'app-daily-report',
  templateUrl: './daily-report.component.html',
  styleUrls: ['./daily-report.component.css']
})
export class DailyReportComponent implements OnInit {
  dailyState = [];
  state : string;
  constructor(private geoService: GeoChartService, private dailyService: StateDailyService) { }

  ngOnInit(): void {
    this.geoService.selectedState.subscribe(data => {
      this.state = data;
      this.dailyState = [];
      const stateName = data.toLowerCase();
      this.dailyService.getStateDailyReport(stateName)
        .subscribe(res => {
          console.log(res);
          this.dailyState.push(...res);
        });
    });
  }

}
