import { Component, OnInit } from '@angular/core';
import { TotalCasesService } from './total-cases.service';
import { SummaryCases } from './total-cases.interface';

@Component({
  selector: 'app-total-cases',
  templateUrl: './total-cases.component.html',
  styleUrls: ['./total-cases.component.css']
})
export class TotalCasesComponent implements OnInit {

  summary: SummaryCases[];

  constructor(private service: TotalCasesService) { }

  ngOnInit(): void {
    this.service.getData()
      .subscribe(res => {
        this.summary = res;
      });
  }

}
