import { Component, OnInit } from '@angular/core';
import { SpacexApiService } from 'src/app/services/backend/spacex-api.service';
import { QueryStringOptions } from 'src/app/models/queryStringOption';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(
    private spacexApi: SpacexApiService
  ) {}

  ngOnInit(): void {
    this.fetchCompanyInfo();
    this.fetchLaunchesWithParams();
    this.fetchUpcomingLaunches();
  }

  fetchCompanyInfo = () => {
    this.spacexApi
        .getCompanyInfo()
        .subscribe(
          data => {
            console.log('companyinfo', data);
          }
        );
  }

  fetchUpcomingLaunches = () => {
    this.spacexApi
        .getLaunches('upcoming')
        .subscribe(
          data => {
            console.log('launches', data);
          }
        );
  }

  fetchLaunchesWithParams = () => {
    const params = new QueryStringOptions();
    params.launch_year = 2017;
    params.rocket_id = 'falcon9';
    params.core_reuse = true;
    params.core_serial = 'B1029';
    this.spacexApi
        .getLaunches('', params)
        .subscribe(
          data => {
            console.log('launches', data);
          }
        );
  }
}
