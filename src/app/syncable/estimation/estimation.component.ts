import {Component, HostBinding, OnInit} from '@angular/core';
import {SyncableService} from '../services/syncable.service';
import {Observable} from 'rxjs';
import {Operation, SyncableTree} from 'sync_ot';
import {MatDialog} from "@angular/material";
import {PromptDialogComponent} from "../../shared/prompt-dialog/prompt-dialog.component";
import {PromptDialog} from "../../shared/models/dialog";
import {take} from "rxjs/operators";
import {EstimationNode} from "../shared/estimation";

@Component({
  selector: 'etmr-estimation',
  templateUrl: './estimation.component.html',
  styleUrls: ['./estimation.component.scss']
})
export class EstimationComponent implements OnInit {
  @HostBinding('class.root') true;

  public estimation$: Observable<SyncableTree<EstimationNode>>;

  constructor(private _sync: SyncableService,
              private _dialog: MatDialog) { }

  ngOnInit() {
    this.estimation$ = this._sync.tree$;
  }

  public addTopic(root: SyncableTree<EstimationNode>): void {
    const data: PromptDialog = {header: 'Package name', explanation: 'Please enter a name for this package.', placeholder: 'Name', promptData: ''};
    this._dialog.open(PromptDialogComponent, {
      data: data
    }).afterClosed()
      .pipe(take(1))
      .subscribe((val: any | undefined) => {
        if (val && typeof val === "string") {
          this.queueNewTopic(val, root);
        }
      });
  }

  public queueNewTopic(topic: EstimationNode, root: SyncableTree<EstimationNode>): void {
    const operation: Operation = root.createChildAppend(topic);
    this._sync.sr.queueOperation(operation);
  }
}
