import {Injectable} from '@angular/core';
import { SyncableResource, SyncableTree, WebSocketHandler} from "sync_ot";
import {Observable} from "rxjs";
import {EstimationNode} from '../shared/estimation-node';

@Injectable({
  providedIn: 'root'
})
export class SyncableService {
  private readonly _tree$;
  private readonly _sr: SyncableResource<EstimationNode>;

  constructor() {
    const handler = new WebSocketHandler('ws://localhost:1337/');
    this._sr = new SyncableResource(handler);
    this._tree$ = this._sr.getTree$();
  }

  get tree$(): Observable<SyncableTree<EstimationNode>> {
    return this._tree$;
  }

  get sr(): SyncableResource<EstimationNode> {
    return this._sr;
  }
}
