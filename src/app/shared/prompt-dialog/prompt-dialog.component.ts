import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {PromptDialog} from '../models/dialog';

@Component({
  selector: 'etmr-prompt-dialog',
  templateUrl: './prompt-dialog.component.html',
  styleUrls: ['./prompt-dialog.component.scss']
})
export class PromptDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<PromptDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PromptDialog) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onEnter(): void {
    const promptData = this.data.promptData;
    if (promptData && promptData.trim().length > 0) {
      this.dialogRef.close(promptData.trim());
    }
  }
}
