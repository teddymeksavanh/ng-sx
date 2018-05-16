import { Component, OnInit } from '@angular/core';
import { QueryStringOptions } from 'src/app/models/queryStringOption';
import { HttpParams } from '@angular/common/http';
import { AppReadyEvent } from 'src/app/app-ready.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'app';
  public menu = [
    { path: '/', name: 'Home' },
    { path: '/companies', name: 'Companies' },
    { path: '/rockets', name: 'Rockets' },
    { path: '/capsules', name: 'Capsules' },
    { path: '/detailedcapsules', name: 'Detailed capsules' },
    { path: '/launchpads', name: 'Launchpads' },
    { path: '/launches', name: 'Launches' },
    { path: '/detailedcores', name: 'Detailed cores' },
  ];

  constructor(
    private appReadyEvent: AppReadyEvent
  ) {
    appReadyEvent.trigger();
  }

  ngOnInit() {}

  // fetchCompanyInfo = () => {
  //   this.spacexApi
  //       .getCompanyInfo()
  //       .subscribe(
  //         data => {
  //           console.log('companyinfo', data);
  //         }
  //       );
  // }

  // fetchUpcomingLaunches = () => {
  //   this.spacexApi
  //       .getLaunches('upcoming')
  //       .subscribe(
  //         data => {
  //           console.log('launches', data);
  //         }
  //       );
  // }

  // fetchLaunchesWithParams = () => {
  //   const params = new QueryStringOptions();
  //   params.launch_year = 2017;
  //   params.rocket_id = 'falcon9';
  //   params.core_reuse = true;
  //   params.core_serial = 'B1029';
  //   this.spacexApi
  //       .getLaunches('', params)
  //       .subscribe(
  //         data => {
  //           console.log('launches', data);
  //         }
  //       );
  // }

  onActivate = (e) => {
    window.scrollTo(0, 0);
  }
}
