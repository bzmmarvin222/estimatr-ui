import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SyncableTextDirective} from './directives/syncable-text.directive';
import {SyncableService} from './services/syncable.service';
import {FormsModule} from '@angular/forms';
import {EstimationComponent} from './estimation/estimation.component';
import {TopicComponent} from './estimation/topic/topic.component';
import {SingleEstimateComponent} from './estimation/topic/single-estimate/single-estimate.component';
import { EstimationTextComponent } from './estimation/estimation-text/estimation-text.component';
import {
  MatDialogModule,
  MatExpansionModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatTooltipModule
} from "@angular/material";
import {BrowserModule} from "@angular/platform-browser";
import {SharedModule} from "../shared/shared.module";
import {DragDropModule} from "@angular/cdk/drag-drop";
import { EstimationDropdownComponent } from './estimation/estimation-dropdown/estimation-dropdown.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    SharedModule,
    MatInputModule,
    MatExpansionModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    DragDropModule,
    MatSelectModule
  ],
  declarations: [
    SyncableTextDirective,
    EstimationComponent,
    TopicComponent,
    SingleEstimateComponent,
    EstimationTextComponent,
    EstimationDropdownComponent
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
