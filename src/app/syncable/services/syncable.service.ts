import {Injectable} from '@angular/core';
import {SyncableTree} from "../forms/syncable-tree";
import {Operation, OperationType, SyncableResource, WebSocketHandler} from "sync_ot";

@Injectable({
  providedIn: 'root'
})
export class SyncableService {
  private readonly _tree: SyncableTree;
  private _sr: SyncableResource<SyncableTree>;

  constructor() {
    this._tree = {children: [], path: [], data: ''};
    const handler = new WebSocketHandler('ws://localhost:1337/');
    this._sr = new SyncableResource(handler, this._tree);
  }

  get tree(): SyncableTree {
    return this._tree;
  }

  public append(): void {
    this._sr.queueOperation(this.appendOperation());
    console.log(this._tree);
  }

  private appendOperation(): Operation {
    console.log(this._tree.path);
    return {
      objectPath: this._tree.path.concat(['children', this._tree.children.length]),
      type: OperationType.FULL_REPLACEMENT,
      data: {children: [], path: ['children', this._tree.children.length], data: ''},
      range: {
        start: -1, end: -1
      }
    };
  }

  public insert(tree: SyncableTree, data: any): void {
    const op = {
      objectPath: tree.path.concat(['data']),
      type: OperationType.FULL_REPLACEMENT,
      data: data,
      range: {
        start: -1, end: -1
      }
    };
    this._sr.queueOperation(op);
  }
}
