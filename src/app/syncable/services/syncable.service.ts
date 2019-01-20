import {Injectable} from '@angular/core';
import {SyncableResource, SyncableTree, WebSocketHandler} from 'sync_ot';
import {Observable} from 'rxjs';
import {EstimationNode} from '../shared/estimation';
import {environment} from '../../../environments/environment';

@Injectable()
export class SyncableService {
  private _tree$;
  private _sr: SyncableResource<EstimationNode>;

  constructor() {
  }

  public joinSession(sessionId: string): Observable<SyncableTree<EstimationNode>> {
    const handler = new WebSocketHandler(environment.getWebsocketUrl(), sessionId, {Authorization: 'test'});
    this._sr = new SyncableResource(handler);
    this._tree$ = this._sr.getTree$();
    return this.tree$;
  }

  get tree$(): Observable<SyncableTree<EstimationNode>> {
    return this._tree$;
  }

  get sr(): SyncableResource<EstimationNode> {
    return this._sr;
  }
}
