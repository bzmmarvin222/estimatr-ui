import {Component, HostBinding, OnInit} from '@angular/core';
import {AuthService} from '../../auth/services/auth.service';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {EstimationDto} from '../../estimatr-common/lib/estimation/dto/estimation.dto';

@Component({
  selector: 'etmr-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  @HostBinding('class.root') true;

  public estimations$: Observable<EstimationDto[]>;

  constructor(private _auth: AuthService,
              private _http: HttpClient) { }

  ngOnInit() {
    this.estimations$ = this._http.get('api/estimation/all') as Observable<EstimationDto[]>;
  }

}
