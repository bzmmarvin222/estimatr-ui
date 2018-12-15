import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SyncableTextDirective} from './directives/syncable-text.directive';
import {SyncableService} from './services/syncable.service';
import {FormsModule} from '@angular/forms';
import {EstimationComponent} from './estimation/estimation.component';
import {TopicComponent} from './estimation/topic/topic.component';
import {SingleEstimateComponent} from './estimation/topic/single-estimate/single-estimate.component';
import {EstimationTextComponent} from './estimation/estimation-text/estimation-text.component';
import {
  MatDialogModule,
  MatExpansionModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import {SharedModule} from '../shared/shared.module';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {EstimationDropdownComponent} from './estimation/estimation-dropdown/estimation-dropdown.component';
import {EstimationResultComponent} from './estimation/estimation-result/estimation-result.component';
import {RiskControlsComponent} from './estimation/estimation-result/risk-controls/risk-controls.component';
import {EstimationTreeSumPipe} from './pipes/estimation-tree-sum.pipe';
import {RouterModule} from '@angular/router';
import {SyncableRoutes} from './syncable-routes';

@NgModule({
  imports: [
    RouterModule.forChild(SyncableRoutes),
    CommonModule,
    FormsModule,
    SharedModule,
    MatInputModule,
    MatExpansionModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    DragDropModule,
    MatSelectModule,
    MatToolbarModule,
  ],
  declarations: [
    SyncableTextDirective,
    EstimationComponent,
    TopicComponent,
    SingleEstimateComponent,
    EstimationTextComponent,
    EstimationDropdownComponent,
    EstimationResultComponent,
    RiskControlsComponent,
    EstimationTreeSumPipe
  ],
  providers: [
    SyncableService
  ],
  exports: [
    EstimationComponent
  ]
})
export class SyncableModule {
}
