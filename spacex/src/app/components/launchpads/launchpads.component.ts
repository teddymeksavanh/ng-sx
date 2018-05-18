import { Component, OnInit } from '@angular/core';
import { Launchpad } from 'src/app/models/launchpad';
import options from '../../../assets/particles.js';
import { SpacexApiService } from 'src/app/services/backend/spacex-api.service';

@Component({
  selector: 'app-launchpads',
  templateUrl: './launchpads.component.html',
  styleUrls: ['./launchpads.component.css']
})
export class LaunchpadsComponent implements OnInit {
  public launchpads: Launchpad[];

  public particlesOptions = options;

  public style = {
    'margin': 0,
    'padding': 0,
    'background': 'url(/assets/company.jpg) no-repeat center fixed',
    '-webkit-background-size': 'cover',
    'background-size': 'cover',
    'position': 'absolute',
    'width': '100%',
    'height': '100%',
    'z-index': -1
  };

  constructor(
    private spacexApi: SpacexApiService
  ) { }

  ngOnInit() {
    this.fetchLaunchpads();
  }

  fetchLaunchpads = () => {
    this.spacexApi.getLaunchpads()
      .subscribe(
        data => {
          this.launchpads = data;
        },
        errors => {
          console.log('errors', errors);
        }
      );
  }

}
