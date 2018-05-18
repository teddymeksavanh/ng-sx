// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { RoutingModule } from 'src/app/modules/routing/routing.module';

// Components
import { AppReadyEvent } from './app-ready.component';
import { AppComponent } from './app.component';
import { CompanyInfoComponent } from './components/company-info/company-info.component';
import { HomeComponent } from './components/home/home.component';
import { RocketsComponent } from './components/rockets/rockets.component';
import { CapsulesComponent } from './components/capsules/capsules.component';
import { DetailedCapsulesComponent } from './components/detailed-capsules/detailed-capsules.component';
import { LaunchpadsComponent } from './components/launchpads/launchpads.component';
import { LaunchesComponent } from './components/launches/launches.component';
import { DetailedCoresComponent } from './components/detailed-cores/detailed-cores.component';
import { FilterPipe } from './pipes/filter.pipe';
import { RocketDetailComponent } from './components/rocket-detail/rocket-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyInfoComponent,
    HomeComponent,
    RocketsComponent,
    CapsulesComponent,
    DetailedCapsulesComponent,
    LaunchpadsComponent,
    LaunchesComponent,
    DetailedCoresComponent,
    FilterPipe,
    RocketDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    RoutingModule
  ],
  providers: [
    AppReadyEvent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
