import {Component, Input, OnInit} from '@angular/core';
import {SyncableTree} from 'sync_ot';

@Component({
  selector: 'etmr-estimation-text',
  templateUrl: './estimation-text.component.html',
  styleUrls: ['./estimation-text.component.scss']
})
export class EstimationTextComponent implements OnInit {

  @Input() public node: SyncableTree<any>;
  @Input() public withBorder = false;

  constructor() { }

  ngOnInit() {
  }

}
