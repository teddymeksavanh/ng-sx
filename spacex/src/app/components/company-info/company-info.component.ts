import { Component, OnInit } from '@angular/core';
import { SpacexApiService } from 'src/app/services/backend/spacex-api.service';
import { Observable } from 'rxjs';
import { CompanyInfo } from 'src/app/models/companyInfo';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.css']
})
export class CompanyInfoComponent implements OnInit {
  public company: CompanyInfo;

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

  public options =
  {
    particles: {
      number: {
        value: 160,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: '#ffffff'
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#000000'
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: 'img/github.svg',
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 1,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0,
          sync: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 4,
          size_min: 0.3,
          sync: false
        }
      },
      line_linked: {
        enable: false,
        distance: 150,
        color: '#ffffff',
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 1,
        direction: 'none',
        random: true,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 600
        }
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'bubble'
        },
        onclick: {
          enable: true,
          mode: 'repulse'
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 250,
          size: 0,
          duration: 2,
          opacity: 0,
          speed: 3
        },
        repulse: {
          distance: 400,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  };

  constructor(
    private spacexApi: SpacexApiService
  ) { }

  ngOnInit() {
    this.fetchCompanyInfo();
  }

  fetchCompanyInfo = () => {
    this.spacexApi.getCompanyInfo()
      .subscribe(
        data => {
          this.company = data;
        },
        errors => {
          console.log('errors', errors);
        }
      );
  }
}
