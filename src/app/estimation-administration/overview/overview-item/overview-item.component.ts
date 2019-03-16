import {Component, Input, OnInit} from '@angular/core';
import {EstimationDto} from '../../../estimatr-common/lib/estimation/dto/estimation.dto';

@Component({
  selector: 'etmr-overview-item',
  templateUrl: './overview-item.component.html',
  styleUrls: ['./overview-item.component.scss']
})
export class OverviewItemComponent implements OnInit {

  @Input() public estimation: EstimationDto;

  constructor() { }

  ngOnInit() {
  }

}
