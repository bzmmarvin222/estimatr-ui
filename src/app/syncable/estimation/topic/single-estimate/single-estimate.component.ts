import {Component, Input, OnInit} from '@angular/core';
import {Operation, SyncableTree} from 'sync_ot';
import {EstimationLeaf} from '../../../shared/estimation';
import {RiskDrowndownValues} from "../../../shared/dropdown";
import {SyncableService} from "../../../services/syncable.service";

@Component({
  selector: 'etmr-single-estimate',
  templateUrl: './single-estimate.component.html',
  styleUrls: ['./single-estimate.component.scss']
})
export class SingleEstimateComponent implements OnInit {
  @Input() singleEstimate: SyncableTree<EstimationLeaf>;
  public riskOptions = RiskDrowndownValues;

  constructor(private _sync: SyncableService) { }

  ngOnInit() {
  }

  public delete(): void {
    const operation: Operation = this.singleEstimate.createNodeDeletion();
    this._sync.sr.queueOperation(operation);
  }

}
