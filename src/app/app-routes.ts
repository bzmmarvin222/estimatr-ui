import {Routes} from '@angular/router';
import {HomeComponent} from './landing/home/home.component';

export const AppRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'estimate', loadChildren: './syncable/syncable.module#SyncableModule'}
];

