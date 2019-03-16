import {Routes} from '@angular/router';
import {HomeComponent} from './landing/home/home.component';
import {AuthGuard} from './auth/guards/auth.guard';

export const AppRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'administration', loadChildren: './estimation-administration/estimation-administration.module#EstimationAdministrationModule', canActivate: [AuthGuard]},
  {path: 'estimate', loadChildren: './syncable/syncable.module#SyncableModule', canActivate: [AuthGuard]},
  {path: 'account', loadChildren: './account/account.module#AccountModule'},
  {path: '**', component: HomeComponent},
];

