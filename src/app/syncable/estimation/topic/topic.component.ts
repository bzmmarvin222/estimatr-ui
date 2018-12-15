import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Operation, SyncableTree} from 'sync_ot';
import {EstimationDescription, EstimationLeaf, EstimationNode} from '../../shared/estimation';
import {SyncableService} from '../../services/syncable.service';
import {PromptDialog} from '../../../shared/models/dialog';
import {PromptService} from '../../../shared/services/prompt.service';

@Component({
  selector: 'etmr-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {
  @HostBinding('class.accordion')
  @Input() public topicNode: SyncableTree<EstimationNode>;

  constructor(private _sync: SyncableService,
              private _prompt: PromptService) {
  }

  ngOnInit() {
  }

  public addSingleEstimate(): void {
    const estimate: EstimationLeaf = {effortInManDays: null, taskDescription: '', risk: 'moderate'};
    const operation: Operation = this.topicNode.createChildAppend(estimate);
    this._sync.sr.queueOperation(operation);
  }

  public delete(): void {
    this._prompt
      .confirm$({header: 'Are you sure?', description: 'You can not revert this, it will be deleted permanently.', promptData: false})
      .subscribe((val: boolean) => {
        if (val) {
          this.queueDeletion();
        }
      });
  }

  private queueDeletion(): void {
    const operation: Operation = this.topicNode.createNodeDeletion();
    this._sync.sr.queueOperation(operation);
  }

  public rename(): void {
    const beforeDialog: string = this.topicNode.data as EstimationDescription;
    const dialog: PromptDialog<string> = {
      header: 'Package name',
      description: 'Please enter a name for this package.',
      placeholder: 'Name',
      promptData: this.topicNode.data as EstimationDescription
    };
    this._prompt.prompt$(dialog)
      .subscribe((val: any | undefined) => this.queueRename(beforeDialog, val));
  }

  private queueRename(oldVal: string, updatedVal: string | undefined): void {
    const alreadyChanged: boolean = this.topicNode.data !== oldVal;
    const changedToSameValue = this.topicNode.data === updatedVal;

    if (updatedVal && typeof updatedVal === 'string' && !alreadyChanged) {
      this.queueRenameOperation(updatedVal);
    } else if (updatedVal && !changedToSameValue) {
      // TODO: make more beautiful
      alert('already changed by someone else...');
    }

  }

  private queueRenameOperation(newName: string): void {
    const operation: Operation = this.topicNode.createReplacement(newName);
    this._sync.sr.queueOperation(operation);
  }
}
