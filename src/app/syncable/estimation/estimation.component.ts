import {Component, HostBinding, OnDestroy, OnInit} from '@angular/core';
import {SyncableService} from '../services/syncable.service';
import {Observable, Subscription} from 'rxjs';
import {Operation, SyncableTree} from 'sync_ot';
import {MatDialog} from '@angular/material';
import {PromptDialogComponent} from '../../shared/modals-popups/prompt-dialog/prompt-dialog.component';
import {PromptDialog} from '../../shared/models/dialog';
import {take} from 'rxjs/operators';
import {ActivatedRoute, Params} from '@angular/router';
import {EstimationNode} from '../../estimatr-common/lib/estimation/estimation';

@Component({
  selector: 'etmr-estimation',
  templateUrl: './estimation.component.html',
  styleUrls: ['./estimation.component.scss']
})
export class EstimationComponent implements OnInit, OnDestroy {
  @HostBinding('class.root') true;

  public estimation$: Observable<SyncableTree<EstimationNode>>;
  private _sub: Subscription;

  constructor(private _sync: SyncableService,
              private _dialog: MatDialog,
              private _route: ActivatedRoute) {
  }

  ngOnInit() {
    this._sub = this._route.params.subscribe((params: Params) => {
      const estimationId: string = params['estimationId'];
      this.estimation$ = this._sync.joinSession(estimationId);
    });

  }

  public addTopic(root: SyncableTree<EstimationNode>): void {
    const data: PromptDialog<string> = {
      header: 'Package name',
      description: 'Please enter a name for this package.',
      placeholder: 'Name',
      promptData: ''
    };
    this._dialog.open(PromptDialogComponent, {
      data: data
    }).afterClosed()
      .pipe(take(1))
      .subscribe((val: any | undefined) => {
        if (val && typeof val === 'string') {
          this.queueNewTopic(val, root);
        }
      });
  }

  public queueNewTopic(topic: EstimationNode, root: SyncableTree<EstimationNode>): void {
    const operation: Operation = root.createChildAppend(topic);
    this._sync.sr.queueOperation(operation);
  }

  ngOnDestroy(): void {
    this._sub.unsubscribe();
  }
}
