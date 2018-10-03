import {Injectable} from '@angular/core';
import {SyncableTree, SyncableTreeUtil} from "../forms/syncable-tree";
import {OperationType, SyncableResource, WebSocketHandler} from "sync_ot";

@Injectable({
  providedIn: 'root'
})
export class SyncableService {
  private readonly _tree: SyncableTree;
  private _sr: SyncableResource<SyncableTree>;

  constructor() {
    this._tree = SyncableTreeUtil.createEmpty();
    const handler = new WebSocketHandler('ws://localhost:1337/');
    this._sr = new SyncableResource(handler, this._tree);
  }

  get tree(): SyncableTree {
    return this._tree;
  }

  public appendToRoot(): void {
    this.appendTo(this._tree);
  }

  public appendTo(node: SyncableTree): void {
    this._sr.queueOperation(SyncableTreeUtil.createAppendOperation(node));
  }

  public insert(node: SyncableTree, data: string): void {
    this._sr.queueOperation(SyncableTreeUtil.createInsertionOperation(node, data));
  }
}
