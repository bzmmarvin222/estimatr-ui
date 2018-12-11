import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {SharedModule} from "../shared/shared.module";
import {MatIconModule, MatToolbarModule} from "@angular/material";

@NgModule({
  imports: [
    SharedModule,
    MatToolbarModule,
    MatIconModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule {
}
