import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {RouterModule} from '@angular/router';
import {AccountRoutes} from './account-routes';
import { OauthLoginsComponent } from './oauth-logins/oauth-logins.component';

@NgModule({
  declarations: [
    LoginComponent,
    OauthLoginsComponent
  ],
  imports: [
    RouterModule.forChild(AccountRoutes),
    CommonModule
  ]
})
export class AccountModule { }
