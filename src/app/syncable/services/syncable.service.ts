import {Injectable} from '@angular/core';
import {SyncableResource, SyncableTree, WebSocketHandler} from 'sync_ot';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {EstimationNode} from '../../estimatr-common/lib/estimation/estimation';

function getCookie(name: string): string {
  const nameLenPlus = (name.length + 1);
  return document.cookie
    .split(';')
    .map(c => c.trim())
    .filter(cookie => {
      return cookie.substring(0, nameLenPlus) === `${name}=`;
    })
    .map(cookie => {
      return decodeURIComponent(cookie.substring(nameLenPlus));
    })[0] || null;
}

@Injectable()
export class SyncableService {
  private _tree$;
  private _sr: SyncableResource<EstimationNode>;

  constructor() {
  }

  public joinSession(estimationId: string): Observable<SyncableTree<EstimationNode>> {
    const jwt = getCookie('jwt');
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
