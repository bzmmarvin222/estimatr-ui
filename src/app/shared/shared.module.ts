import {NgModule} from '@angular/core';
import {PromptDialogComponent} from './prompt-dialog/prompt-dialog.component';
import {MatButtonModule, MatDialogModule, MatInputModule} from '@angular/material';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [PromptDialogComponent],
  imports: [
    FormsModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [PromptDialogComponent]
})
export class SharedModule {
}
