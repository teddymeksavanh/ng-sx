import { Component, OnInit } from '@angular/core';
import { SpacexApiService } from 'src/app/services/backend/spacex-api.service';
import { Rocket } from 'src/app/models/rocket';
import options from '../../../assets/particles.js';

@Component({
  selector: 'app-rockets',
  templateUrl: './rockets.component.html',
  styleUrls: ['./rockets.component.css']
})
export class RocketsComponent implements OnInit {
  public rockets: Rocket[];

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
    this.fetchRockets();
  }

  fetchRockets = () => {
    this.spacexApi.getRockets()
      .subscribe(
        data => {
          this.rockets = data;
        },
        errors => {
          console.log('errors', errors);
        }
      );
  }

}
