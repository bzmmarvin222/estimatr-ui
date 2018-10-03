import {Component, OnInit} from '@angular/core';
import {Operation, OperationType, SyncableResource, WebSocketHandler} from "sync_ot";
import {SyncableService} from "./syncable/services/syncable.service";
import {SyncableTree} from "./syncable/forms/syncable-tree";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public data: SyncableTree;
  private _sr;

  constructor(private _sync: SyncableService) {
  }

  ngOnInit(): void {
    this.data = this._sync.tree;
  }

  public add(): void {
    this._sync.append();
  }

  public sync(): void {
    const insertion:Operation = {
      range: {
        start: 1,
        //end will be ignored on insertion
        end: -1
      },
      type: OperationType.INSERT,
      data: 'Insert',
      objectPath: ['data']
    };

    this._sr.queueOperation(insertion);
  }

  public syncBy(ev: string) {
    const update:Operation = {
      range: {
        start: -1,
        end: -1
      },
      type: OperationType.FULL_REPLACEMENT,
      data: ev,
      objectPath: ['data']
    };
    this._sr.queueOperation(update);
  }
}
