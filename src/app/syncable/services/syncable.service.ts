import {Injectable} from '@angular/core';
import { SyncableResource, SyncableTree, WebSocketHandler} from "sync_ot";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SyncableService {
  private readonly _tree$;
  private readonly _sr: SyncableResource<any>;

  constructor() {
    const handler = new WebSocketHandler('ws://localhost:1337/');
    this._sr = new SyncableResource(handler);
    this._tree$ = this._sr.getTree$();

  }

  get tree$(): Observable<SyncableTree<any>> {
    return this._tree$;
  }

  get sr(): SyncableResource<SyncableTree<any>> {
    return this._sr;
  }
}
