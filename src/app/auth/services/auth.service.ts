import { Injectable } from '@angular/core';
import * as jwtdecode from 'jwt-decode';
import {CookieService} from 'ngx-cookie-service';
import {Observable, ReplaySubject, Subject} from 'rxjs';
import {UserDto} from '../../estimatr-common/lib/auth/dto/user.dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _userChanges$: Subject<UserDto> = new ReplaySubject(1);
  private _user: UserDto;
  private _rawToken: string;

  constructor() {
    this._userChanges$.subscribe(user => this._user = user);
  }

  get userChanges$(): Observable<UserDto> {
    return this._userChanges$.asObservable();
  }
  get user(): UserDto {
    return this._user;
  }
  get rawToken(): string {
    return this._rawToken;
  }

  public loadFromToken(jwt: string): void {
    if (!jwt) {
      return;
    }
    const user: UserDto = jwtdecode(jwt);
    // exp is in seconds, date is in millis
    if (user.exp >= Date.now() / 1000) {
      this._rawToken = jwt;
      this._userChanges$.next(user);
    }
  }

  public isLoggedIn(): boolean {
    return !!this._user;
  }
}
