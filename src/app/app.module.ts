import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {CoreModule} from "./core/core.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SharedModule} from "./shared/shared.module";
import {PromptDialogComponent} from "./shared/prompt-dialog/prompt-dialog.component";
import {LandingModule} from './landing/landing.module';

import {RouterModule} from '@angular/router';
import {AppRoutes} from './app-routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(AppRoutes),
    BrowserModule,
    FormsModule,
    SharedModule,
    CoreModule,
    BrowserAnimationsModule,
    LandingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    PromptDialogComponent
  ]
})
export class AppModule { }
