import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SpacexApiService } from 'src/app/services/backend/spacex-api.service';
import { Rocket } from 'src/app/models/rocket';
import options from '../../../assets/particles.js';

@Component({
  selector: 'app-rocket-detail',
  templateUrl: './rocket-detail.component.html',
  styleUrls: ['./rocket-detail.component.css']
})
export class RocketDetailComponent implements OnInit {
  public rocketId;
  public rocket: Rocket;
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
    private spacexApi: SpacexApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params
        .subscribe((param: Params) => {
          console.log('ara', param);
          if (param['id']) {
            this.rocketId = param['id'];
            this.fetchRocket(this.rocketId);
          }
        });
  }

  fetchRocket = (id: string) => {
    this.spacexApi
        .getRocket(id)
        .subscribe(
          data => {
            this.rocket = data;
          },
          errors => {
            console.log('errors', errors);
          }
        );
  }

}
