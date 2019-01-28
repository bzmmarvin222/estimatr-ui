import {Component, OnInit} from '@angular/core';
import {ProjectCreationService} from '../services/project-creation.service';
import {AuthService} from '../../auth/services/auth.service';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {UserDto} from '../../estimatr-common/lib/auth/dto/user.dto';

@Component({
  selector: 'etmr-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public user$: Observable<UserDto>;

  constructor(private _projectCreation: ProjectCreationService,
              private _auth: AuthService,
              private _router: Router) {
  }

  ngOnInit() {
    this.user$ = this._auth.userChanges$;
  }

  public createProject(): void {
    this._projectCreation.initProjectCreation();
  }

  public joinSession(): void {
    this._projectCreation.switchSession();
  }

  public login(): void {
    this._router.navigate(['account/login']);
  }

  public signup(): void {
    this._router.navigate(['account/signup']);
  }
}
