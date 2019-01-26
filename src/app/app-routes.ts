import {Routes} from '@angular/router';
import {HomeComponent} from './landing/home/home.component';
import {AuthGuardService} from './auth/guards/auth-guard.service';

export const AppRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'estimate', loadChildren: './syncable/syncable.module#SyncableModule', canActivate: [AuthGuardService]}
];

