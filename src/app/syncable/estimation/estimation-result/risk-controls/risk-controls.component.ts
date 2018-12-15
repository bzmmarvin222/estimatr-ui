import {Component, Input, OnInit} from '@angular/core';
import {SyncableTree} from 'sync_ot';
import {EstimationRoot} from '../../../shared/estimation';

@Component({
  selector: 'etmr-risk-controls',
  templateUrl: './risk-controls.component.html',
  styleUrls: ['./risk-controls.component.scss']
})
export class RiskControlsComponent implements OnInit {

  @Input() public root: SyncableTree<EstimationRoot>;

  constructor() {
  }

  ngOnInit() {
  }

}
