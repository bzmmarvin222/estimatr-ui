import {Component, Input, OnInit} from '@angular/core';
import {SyncableTree} from 'sync_ot';
import {ObjectPath} from 'sync_ot/dist/operation/object-traversing-util';

@Component({
  selector: 'etmr-estimation-text',
  templateUrl: './estimation-text.component.html',
  styleUrls: ['./estimation-text.component.scss']
})
export class EstimationTextComponent implements OnInit {

  @Input() public node: SyncableTree<any>;
  @Input() public objectPath: ObjectPath = [];
  @Input() public placeholder = '';
  @Input() public fontSize = '1em';
  @Input() public type = 'text';

  constructor() {
  }

  ngOnInit() {
  }

}
