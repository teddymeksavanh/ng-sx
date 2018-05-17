import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from 'src/app/app.component';
import { RouterModule, Routes } from '@angular/router';
import { CompanyInfoComponent } from 'src/app/components/company-info/company-info.component';
import { HomeComponent } from 'src/app/components/home/home.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: HomeComponent
  },
  {
    path: 'company',
    component: CompanyInfoComponent
  },
  {
    path: 'rockets',
    component: CompanyInfoComponent
  },
  {
    path: 'capsules',
    component: CompanyInfoComponent
  },
  {
    path: 'launchpads',
    component: CompanyInfoComponent
  },
  {
    path: 'launches',
    component: CompanyInfoComponent
  },
  {
    path: 'detailedcapsules',
    component: CompanyInfoComponent
  },
  {
    path: 'detailedcores',
    component: CompanyInfoComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
