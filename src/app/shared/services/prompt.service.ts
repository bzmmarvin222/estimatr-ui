import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material';
import {PromptDialog} from '../models/dialog.interface';
import {Observable} from 'rxjs';
import {PromptDialogComponent} from '../modals-popups/prompt-dialog/prompt-dialog.component';
import {ConfirmDialogComponent} from '../modals-popups/confirm-dialog/confirm-dialog.component';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PromptService {

  constructor(private _dialog: MatDialog) { }

  public prompt$(options: PromptDialog<string>): Observable<string | undefined> {
    return this._dialog
      .open(PromptDialogComponent, {data: options, width: '320px'})
      .afterClosed();
  }

  public confirm$(options: PromptDialog<boolean>): Observable<boolean> {
    return this._dialog
      .open(ConfirmDialogComponent, {data: options, width: '320px'})
      .afterClosed()
      .pipe(map(v => v === undefined ? false : v));
  }
}
