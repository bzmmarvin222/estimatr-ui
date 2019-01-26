import {Injectable} from '@angular/core';
import {combineLatest, interval, Observable, race, Subject} from 'rxjs';
import {filter, map, take, takeWhile, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WindowOpenerService {

  private _events$: Subject<MessageEvent> = new Subject();

  constructor() {
    window.addEventListener('message', evt => this._events$.next(evt));
  }

  public open(location: string): Observable<boolean> {
    const opened: Window = this.openCentered(location, 452, 633);

    const pollStillOpen$ = interval(500)
      .pipe(
        map(() => !opened.closed),
        filter(open => !open)
      );

    const success$ = this._events$.pipe(
      filter(evt => evt.source === opened),
      map(evt => evt.data.status == 200),
      tap(() => opened.close())
    );

    return race(pollStillOpen$, success$)
      .pipe(take(1));
  }

  /**
   * Opens a new window to the given url. It will be centered on screen.
   * @param location - what to open
   * @param w - the desired width
   * @param h - the desired height
   */
  private openCentered(location: string, w: number, h: number): Window {
    // see http://www.xtf.dk/2011/08/center-new-popup-window-even-on.html
    // see https://stackoverflow.com/questions/4068373/center-a-popup-window-on-screen

    // Fix dual screen position
    const dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : window.screenX;
    const dualScreenTop = window.screenTop != undefined ? window.screenTop : window.screenY;

    const width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    const height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

    const systemZoom = Math.max(width / window.screen.availWidth, 1.2);
    const left = (width - w) / 2 / systemZoom + dualScreenLeft;
    const top = (height - h) / 2 / systemZoom + dualScreenTop;
    const features: string = `scrollbars=no, width=${w / systemZoom}, height=${h / systemZoom}, top=${top}, left=${left}`;
    return window.open(location, '_blank', features);
  }
}
