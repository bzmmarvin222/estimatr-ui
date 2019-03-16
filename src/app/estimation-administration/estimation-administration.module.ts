import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview/overview.component';
import { OverviewItemComponent } from './overview/overview-item/overview-item.component';
import {RouterModule} from '@angular/router';
import {EstimationAdministraionRoutes} from './estimation-administration-routes';

@NgModule({
  declarations: [OverviewComponent, OverviewItemComponent],
  imports: [
    RouterModule.forChild(EstimationAdministraionRoutes),
    CommonModule
  ],
  exports: [
    OverviewComponent
  ]
})
export class EstimationAdministrationModule { }
