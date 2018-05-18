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

@NgModule({
  declarations: [
    AppComponent,
    CompanyInfoComponent,
    HomeComponent,
    RocketsComponent
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
