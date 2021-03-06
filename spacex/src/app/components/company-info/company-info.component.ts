import { Component, OnInit } from '@angular/core';
import { SpacexApiService } from 'src/app/services/backend/spacex-api.service';
import { Observable } from 'rxjs';
import { CompanyInfo } from 'src/app/models/companyInfo';
import options from '../../../assets/particles.js';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.css']
})
export class CompanyInfoComponent implements OnInit {
  public company: CompanyInfo;

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
