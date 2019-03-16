import {Component, Input, OnInit} from '@angular/core';
import {EstimationDto} from '../../../estimatr-common/lib/estimation/dto/estimation.dto';
import {EstimationRoot} from '../../../estimatr-common/lib/estimation/estimation';
import {Router} from '@angular/router';

@Component({
  selector: 'etmr-overview-item',
  templateUrl: './overview-item.component.html',
  styleUrls: ['./overview-item.component.scss']
})
export class OverviewItemComponent implements OnInit {

  @Input() public estimation: EstimationDto;
  public rootData: EstimationRoot;

  constructor(private _router: Router) { }

  ngOnInit() {
    this.rootData = this.estimation.tree.data as EstimationRoot;
  }

  public edit(): void {
    this._router.navigate([`estimate/${this.estimation.id}`]);
  }
}
