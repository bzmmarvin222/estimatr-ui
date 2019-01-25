import { Injectable } from '@angular/core';
import {OAuth} from '../../shared/oauth.interface';
import {WindowOpenerService} from '../../../shared/services/window-opener.service';

@Injectable({
  providedIn: 'root'
})
export class GoogleOAuthService implements OAuth {

  constructor(private _windowOpener: WindowOpenerService) { }

  authorize(): void {
    this._windowOpener.open('api/auth/google').then(success => {
      console.log('authenticated: ' + success);
    });
  }
}
