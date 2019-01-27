import { Component, OnInit } from '@angular/core';
import {GoogleOAuthService} from '../../auth/services/oauth/google-oauth.service';

@Component({
  selector: 'etmr-oauth-logins',
  templateUrl: './oauth-logins.component.html',
  styleUrls: ['./oauth-logins.component.scss']
})
export class OauthLoginsComponent implements OnInit {

  constructor(private _google: GoogleOAuthService) { }

  ngOnInit() {
  }

  public loginWithGoogle(): void {
    this._google.authorize();
  }

}
