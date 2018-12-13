import {Component, HostListener, Input, OnInit} from '@angular/core';
import {SyncableTree} from 'sync_ot';
import {EstimationLeaf, EstimationNode} from '../../../shared/estimation-node';

@Component({
  selector: 'etmr-single-estimate',
  templateUrl: './single-estimate.component.html',
  styleUrls: ['./single-estimate.component.scss']
})
export class SingleEstimateComponent implements OnInit {
  // TODO: syncable tree data tree must be extensible
  @Input() singleEstimate: SyncableTree<EstimationLeaf>;

  constructor() { }

  ngOnInit() {
    // this.singleEstimate.
  }

}
