import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SyncableModule} from "./syncable/syncable.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SyncableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
