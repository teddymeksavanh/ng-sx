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
  public companies: Observable<CompanyInfo[]>;

  constructor(
    private spacexApi: SpacexApiService
  ) { }

  ngOnInit() {
    this.companies = this.fetchCompanyInfo();
  }

  fetchCompanyInfo = () => this.spacexApi.getCompanyInfo();
}
