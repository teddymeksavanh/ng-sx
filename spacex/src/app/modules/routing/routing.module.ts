import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from 'src/app/app.component';
import { RouterModule, Routes } from '@angular/router';
import { CompanyInfoComponent } from 'src/app/components/company-info/company-info.component';

const appRoutes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'companyinfo',
    component: CompanyInfoComponent
  },
  {
    path: '**',
    component: AppComponent
  }
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
