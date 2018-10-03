import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SyncableTextDirective} from './directives/syncable-text.directive';
import {SyncableService} from "./services/syncable.service";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    SyncableTextDirective
  ],
  providers: [
    SyncableService
  ],
  exports: [
    SyncableTextDirective
  ]
})
export class SyncableModule {
}
