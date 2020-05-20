import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TotalCasesComponent } from './total-cases/total-cases.component';
import { CountUpModule } from 'ngx-countup';
import { TotalCasesService } from './total-cases/total-cases.service';
import { GeoChartComponent } from './geo-chart/geo-chart.component';
import { StateDetailComponent } from './state-detail/state-detail.component';
import { DailyReportComponent } from './daily-report/daily-report.component';

@NgModule({
  declarations: [
    AppComponent,
    TotalCasesComponent,
    GeoChartComponent,
    StateDetailComponent,
    DailyReportComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CountUpModule
  ],
  providers: [TotalCasesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
