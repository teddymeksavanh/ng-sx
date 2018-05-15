import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// 3rd tiers
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { CompanyInfoComponent } from './components/company-info/company-info.component'';

// Services

@NgModule({
  declarations: [
    AppComponent,
    CompanyInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
