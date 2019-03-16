import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {PromptDialog} from '../../models/dialog.interface';

@Component({
  selector: 'etmr-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss', '../modals-popups.scss']
})
export class ConfirmDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PromptDialog<boolean>) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
