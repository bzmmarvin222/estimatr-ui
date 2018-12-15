import {Routes} from '@angular/router';
import {EstimationComponent} from './estimation/estimation.component';

export const SyncableRoutes: Routes = [
  {path: ':sessionId', component: EstimationComponent}
];
