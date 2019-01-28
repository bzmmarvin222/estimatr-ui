import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth/services/auth.service';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'etmr-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  public estimations$: Observable<any[]>;

  constructor(private _auth: AuthService,
              private _http: HttpClient) { }

  ngOnInit() {
    this.estimations$ = this._http.get('api/estimation/all') as Observable<any[]>;
  }

}
