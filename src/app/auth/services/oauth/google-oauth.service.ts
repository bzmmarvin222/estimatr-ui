import { Injectable } from '@angular/core';
import {OAuth} from '../../interfaces/oauth.interface';
import {WindowOpenerService} from '../../../shared/services/window-opener.service';
import {AuthService} from '../auth.service';
import {LoginSuccess} from '../../models/login-success.interface';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class GoogleOAuthService implements OAuth {

  constructor(private _windowOpener: WindowOpenerService,
              private _auth: AuthService,
              private _cookieService: CookieService) {
    this.checkDefaultAuth();
  }

  public checkDefaultAuth(): void {
    const isGoogle = this._cookieService.get('defaultAuth') === 'google';
    if (isGoogle) {
      this.authorize();
    }
  }

  authorize(): void {
    this._cookieService.set('defaultAuth', 'google');
    this._windowOpener.open<LoginSuccess>('api/auth/google').subscribe(result => {
      if (result.success) {
        this._auth.loadFromToken(result.body.token);
      } else {
        // TODO: should show some beautiful modal
        alert('kaputt');
      }
    });
  }
}
