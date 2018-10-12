import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SyncableTextDirective} from './directives/syncable-text.directive';
import {SyncableService} from "./services/syncable.service";
import {FormsModule} from "@angular/forms";
import { EstimationComponent } from './estimation/estimation.component';
import { TopicComponent } from './estimation/topic/topic.component';
import { SingleEstimateComponent } from './estimation/topic/single-estimate/single-estimate.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    SyncableTextDirective,
    EstimationComponent,
    TopicComponent,
    SingleEstimateComponent
  ],
  providers: [
    SyncableService
  ],
  exports: [
    SyncableTextDirective,
    EstimationComponent
  ]
})
export class SyncableModule {
}
