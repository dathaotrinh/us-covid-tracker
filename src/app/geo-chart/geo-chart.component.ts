import { Component, OnInit } from '@angular/core';
import { GeoChartService } from './geo-chart.service';
import { state } from './state.model';
declare var google;
@Component({
  selector: 'app-geo-chart',
  templateUrl: './geo-chart.component.html',
  styleUrls: ['./geo-chart.component.css']
})
export class GeoChartComponent implements OnInit {

  constructor(private geoService: GeoChartService) { }
  countryReport: state[] = [];

  ngOnInit(): void {
    this.geoService.getDailyReportByCountry()
      .subscribe(res => {
        console.log(res);
        this.countryReport.push(...res);
        this.drawInteractiveMap(this.countryReport);
      })
  }

  drawInteractiveMap(countryReport: state[]) {

    google.charts.load('current', {
      'packages': ['geomap'],
      'mapsApiKey': 'AIzaSyBI-w6nENA75t49RIuEfGcVPtsbKTI-Yc8'
    });
    google.charts.setOnLoadCallback(() => {


      var options = {
        colorAxis: { colors: ['#FCB031', '#FFA334', '#FC9B17', '#F4911B', '#FC9013', '#FA890F', '#FD7F05', '#FD7400', '#FD6801', '#FF5B01', '#FF4E00', '#FF4900'] },
        backgroundColor: '#0f0e17',
        datalessRegionColor: '#ff8906',
        defaultColor: '#f5f5f5',
      };

      options['region'] = 'US';
      options['resolution'] = 'provinces';
      var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));


      google.visualization.events.addListener(chart, 'select', () => {
        const select = chart.getSelection();
        this.geoService.selectedState.next(google.visualization.arrayToDataTable(dataTable).getValue(select[0].row, 0));
      });
      
      let dataTable = [];
      dataTable[0] = ['State', 'Positive Cases', 'Negative'];
      for (let i = 0; i < countryReport.length; i++) {
        const stateDetail = countryReport[i];
        dataTable[i + 1] = [stateDetail.state, stateDetail.positive, stateDetail.negative];
      }

      var data = google.visualization.arrayToDataTable(dataTable);


      chart.draw(data,  options);

    });



  }

}
