import {Component, OnInit} from '@angular/core';
import {GoogleOAuthService} from './auth/services/oauth/google-oauth.service';

@Component({
  selector: 'etmr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private _googleAuth: GoogleOAuthService) {
  }

  ngOnInit(): void {
  }

  login(): void {
    this._googleAuth.authorize();
  }
}
