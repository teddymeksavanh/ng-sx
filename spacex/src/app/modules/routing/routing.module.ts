import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from 'src/app/app.component';
import { RouterModule, Routes } from '@angular/router';
import { CompanyInfoComponent } from 'src/app/components/company-info/company-info.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { RocketsComponent } from 'src/app/components/rockets/rockets.component';
import { CapsulesComponent } from 'src/app/components/capsules/capsules.component';
import { LaunchpadsComponent } from 'src/app/components/launchpads/launchpads.component';
import { LaunchesComponent } from 'src/app/components/launches/launches.component';
import { DetailedCapsulesComponent } from 'src/app/components/detailed-capsules/detailed-capsules.component';
import { DetailedCoresComponent } from 'src/app/components/detailed-cores/detailed-cores.component';
import { RocketDetailComponent } from 'src/app/components/rocket-detail/rocket-detail.component';

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
    component: RocketsComponent
  },
  {
    path: 'rockets/:id',
    component: RocketDetailComponent
  },
  {
    path: 'capsules',
    component: CapsulesComponent
  },
  {
    path: 'launchpads',
    component: LaunchpadsComponent
  }
];
    // {
    //   path: 'launches',
    //   component: LaunchesComponent
    // },
    // {
    //   path: 'detailedcapsules',
    //   component: DetailedCapsulesComponent
    // },
    // {
    //   path: 'detailedcores',
    //   component: DetailedCoresComponent
    // },

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
