import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ObjectPath, Operation, SyncableTree} from "sync_ot";
import {DropdownValue} from "../../shared/dropdown";
import {MatSelectChange} from "@angular/material";
import {SyncableService} from "../../services/syncable.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'etmr-estimation-dropdown',
  templateUrl: './estimation-dropdown.component.html',
  styleUrls: ['./estimation-dropdown.component.scss']
})
export class EstimationDropdownComponent implements OnInit, OnDestroy {

  private _sub;

  public currentValue: any;
  @Input() public node: SyncableTree<any>;
  @Input() public objectPath: ObjectPath = [];
  @Input() public placeholder = '';
  @Input() public fontSize = '1em';
  @Input() public options: DropdownValue<any>[];

  constructor(private _sync: SyncableService) { }

  ngOnInit() {
    this._sub = this.node.getDataChangesFor$(...this.objectPath)
      .subscribe(data => this.currentValue = data);
  }

  public onValueChange(change: MatSelectChange) {
    const operation: Operation = this.node.createReplacement(change.value, ...this.objectPath);
    this._sync.sr.queueOperation(operation);
  }

  ngOnDestroy(): void {
    this._sub.unsubscribe();
  }
}
