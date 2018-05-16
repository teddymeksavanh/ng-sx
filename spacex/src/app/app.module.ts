import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// 3rd tiers

// Components
import { AppComponent } from './app.component';
import { AppReadyEvent } from './app-ready.component';
import { CompanyInfoComponent } from './components/company-info/company-info.component';

// Modules
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { RoutingModule } from 'src/app/modules/routing/routing.module';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyInfoComponent,
    HomeComponent
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
