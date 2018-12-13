import {Component, Input, OnInit} from '@angular/core';
import {SyncableTree} from "sync_ot";
import {EstimationNode} from "../../shared/estimation";
import {RiskFactors} from "../../shared/risk";

@Component({
  selector: 'etmr-estimation-result',
  templateUrl: './estimation-result.component.html',
  styleUrls: ['./estimation-result.component.scss']
})
export class EstimationResultComponent implements OnInit {

  @Input() public estimationTree: SyncableTree<EstimationNode>;
  public riskFactors: RiskFactors = {low: 1, moderate: 1.5, high: 2, showstopper: 99};

  constructor() { }

  ngOnInit() {
  }

}
