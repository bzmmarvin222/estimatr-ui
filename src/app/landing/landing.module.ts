import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {EstimationAdministrationModule} from '../estimation-administration/estimation-administration.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    EstimationAdministrationModule
  ],
  exports: [
    HomeComponent
  ]
})
export class LandingModule {
}
