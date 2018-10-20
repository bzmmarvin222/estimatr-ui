import { Component, OnInit } from '@angular/core';
import {SyncableService} from '../services/syncable.service';
import {Observable} from 'rxjs';
import {Operation, SyncableTree} from 'sync_ot';
import {EstimationNode} from '../models/estimation-node';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'etmr-estimation',
  templateUrl: './estimation.component.html',
  styleUrls: ['./estimation.component.scss']
})
export class EstimationComponent implements OnInit {
  //TODO: Syncable Tree children should not require the same type as parents
  public estimation$: Observable<SyncableTree<EstimationNode>>;
  public faPlus = faPlus;

  constructor(private _sync: SyncableService) { }

  ngOnInit() {
    this.estimation$ = this._sync.tree$;
  }

  public addTopic(root: SyncableTree<EstimationNode>): void {
    const operation: Operation = root.createChildAppend('Estimated Topic');
    this._sync.sr.queueOperation(operation);
  }

}
