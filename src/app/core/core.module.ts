import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {SharedModule} from '../shared/shared.module';
import {MatButtonModule, MatIconModule, MatToolbarModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {AuthModule} from '../auth/auth.module';

@NgModule({
  imports: [
    HttpClientModule,
    SharedModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    CommonModule,
    AuthModule
  ],
  declarations: [
    HeaderComponent,
  ],
  exports: [
    HeaderComponent,
  ]
})
export class CoreModule {
}
