import {Component, Input, OnInit} from '@angular/core';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {Operation, SyncableTree} from 'sync_ot';
import {EstimationLeaf, EstimationNode} from '../../models/estimation-node';
import {SyncableService} from '../../services/syncable.service';

@Component({
  selector: 'etmr-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {
  @Input() public topicNode: SyncableTree<EstimationNode>;
  public faPlus = faPlus;

  constructor(private _sync: SyncableService) { }

  ngOnInit() {
  }

  public addSingleEstimate(): void {
    const estimate: EstimationLeaf = {effortInManDays: 0, taskDescription: ''};
    const operation: Operation = this.topicNode.createChildAppend(estimate);
    this._sync.sr.queueOperation(operation);
  }
}
