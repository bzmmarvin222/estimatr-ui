import {Component, Input, OnInit} from '@angular/core';
import {RiskFactors} from "../../../shared/risk";

@Component({
  selector: 'etmr-risk-controls',
  templateUrl: './risk-controls.component.html',
  styleUrls: ['./risk-controls.component.scss']
})
export class RiskControlsComponent implements OnInit {

  @Input() public riskFactors: RiskFactors;

  constructor() { }

  ngOnInit() {
  }

}
