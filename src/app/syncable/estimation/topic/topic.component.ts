import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Operation, SyncableTree} from 'sync_ot';
import {EstimationDescription, EstimationLeaf, EstimationNode} from '../../shared/estimation-node';
import {SyncableService} from '../../services/syncable.service';
import {PromptDialog} from "../../../shared/models/dialog";
import {PromptDialogComponent} from "../../../shared/prompt-dialog/prompt-dialog.component";
import {take} from "rxjs/operators";
import {MatDialog} from "@angular/material";

@Component({
  selector: 'etmr-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {
  @HostBinding('class.accordion')
  @Input() public topicNode: SyncableTree<EstimationNode>;

  constructor(private _sync: SyncableService,
              private _dialog: MatDialog) { }

  ngOnInit() {
  }

  public addSingleEstimate(): void {
    const estimate: EstimationLeaf = {effortInManDays: 0, taskDescription: ''};
    const operation: Operation = this.topicNode.createChildAppend(estimate);
    this._sync.sr.queueOperation(operation);
  }

  public rename(): void {
    const beforeDialog: string = this.topicNode.data as EstimationDescription;
    const data: PromptDialog = {header: 'Package name', explanation: 'Please enter a name for this package.', placeholder: 'Name', promptData: this.topicNode.data as EstimationDescription};
    this._dialog.open(PromptDialogComponent, {
      data: data
    }).afterClosed()
      .pipe(take(1))
      .subscribe((val: any | undefined) => {
        const alreadyChanged = this.topicNode.data !== beforeDialog;
        const changedToSameValue = this.topicNode.data == val;

        if (val && typeof val === 'string' && !alreadyChanged) {
          this.queueRenameOperation(val);
        } else if (val && !changedToSameValue) {
          //TODO: make more beautiful
          alert('already changed by someone else...');
        }

      });
  }

  private queueRenameOperation(newName: string): void {
    const operation: Operation = this.topicNode.createReplacement(newName);
    this._sync.sr.queueOperation(operation);
  }
}
