import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// 3rd tiers
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { AppReadyEvent } from './app-ready.component';
import { CompanyInfoComponent } from './components/company-info/company-info.component';

// Modules
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { RoutingModule } from 'src/app/modules/routing/routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CompanyInfoComponent
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
