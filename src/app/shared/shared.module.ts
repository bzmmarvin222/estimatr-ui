import {NgModule} from '@angular/core';
import {PromptDialogComponent} from './modals-popups/prompt-dialog/prompt-dialog.component';
import {MatButtonModule, MatDialogModule, MatInputModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import { ConfirmDialogComponent } from './modals-popups/confirm-dialog/confirm-dialog.component';
import {CookieService} from 'ngx-cookie-service';

@NgModule({
  declarations: [PromptDialogComponent, ConfirmDialogComponent],
  imports: [
    FormsModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [CookieService],
  exports: [PromptDialogComponent]
})
export class SharedModule {
}
