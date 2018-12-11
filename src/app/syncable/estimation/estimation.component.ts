import { Component, OnInit } from '@angular/core';
import {SyncableService} from '../services/syncable.service';
import {Observable} from 'rxjs';
import {Operation, SyncableTree} from 'sync_ot';
import {EstimationNode} from '../shared/estimation-node';

@Component({
  selector: 'etmr-estimation',
  templateUrl: './estimation.component.html',
  styleUrls: ['./estimation.component.scss']
})
export class EstimationComponent implements OnInit {
  public estimation$: Observable<SyncableTree<EstimationNode>>;

  constructor(private _sync: SyncableService) { }

  ngOnInit() {
    this.estimation$ = this._sync.tree$;
  }

  public addTopic(root: SyncableTree<EstimationNode>): void {
    const operation: Operation = root.createChildAppend('');
    this._sync.sr.queueOperation(operation);
  }

}
