import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// 3rd tiers
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';

// Services

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
