import { Injectable } from '@angular/core';
import {OAuth} from '../../shared/oauth.interface';
import {WindowOpenerService} from '../../../shared/services/window-opener.service';
import {AuthService} from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class GoogleOAuthService implements OAuth {

  constructor(private _windowOpener: WindowOpenerService,
              private _auth: AuthService) { }

  authorize(): void {
    this._windowOpener.open('api/auth/google').subscribe(success => {
      if (success) {
        this._auth.loadUserFromCookie();
      } else {
        // TODO: should show some beautiful modal
        alert('kaputt');
      }
    });
  }
}
