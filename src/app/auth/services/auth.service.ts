import { Injectable } from '@angular/core';
import * as jwtdecode from 'jwt-decode';
import {UserDto} from '../shared/dto/user.dto';
import {CookieService} from 'ngx-cookie-service';
import {Observable, Subject} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _userChanges$: Subject<UserDto> = new Subject();
  private _user: UserDto;

  constructor(private _cookies: CookieService) {
    this._userChanges$.subscribe(user => this._user = user);
  }

  get userChanges$(): Observable<UserDto> {
    return this._userChanges$.asObservable();
  }
  get user(): UserDto {
    return this._user;
  }

  public loadUserFromCookie(): void {
    const jwt: string = this._cookies.get('jwt');
    this._userChanges$.next(jwtdecode(jwt));
  }

  public isLoggedIn(): boolean {
    return !!this._user;
  }
}
