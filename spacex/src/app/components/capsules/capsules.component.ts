import { Component, OnInit } from '@angular/core';
import options from '../../../assets/particles.js';
import { SpacexApiService } from 'src/app/services/backend/spacex-api.service';
import { Capsule } from 'src/app/models/capsule';

@Component({
  selector: 'app-capsules',
  templateUrl: './capsules.component.html',
  styleUrls: ['./capsules.component.css']
})
export class CapsulesComponent implements OnInit {
  public capsules: Capsule[];

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
    this.fetchCapsules();
  }

  fetchCapsules = () => {
    this.spacexApi.getCapsules()
      .subscribe(
        data => {
          this.capsules  = data;
        },
        errors => {
          console.log('errors', errors);
        }
      );
  }

}
