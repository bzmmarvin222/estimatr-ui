import {Injectable} from '@angular/core';
import {SyncableResource, SyncableTree, WebSocketHandler} from 'sync_ot';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {EstimationNode} from '../../estimatr-common/lib/estimation/estimation';
import {AuthService} from '../../auth/services/auth.service';

@Injectable()
export class SyncableService {
  private _tree$;
  private _sr: SyncableResource<EstimationNode>;

  constructor(private _auth: AuthService) {
  }

  public joinSession(estimationId: string): Observable<SyncableTree<EstimationNode>> {
    const jwt = this._auth.rawToken;
    const handler = new WebSocketHandler(environment.getWebsocketUrl(), estimationId, {Authorization: `Bearer ${jwt}`});
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
