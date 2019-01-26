import {Component, OnInit} from '@angular/core';
import {ProjectCreationService} from '../services/project-creation.service';
import {AuthService} from '../../auth/services/auth.service';
import {Observable} from 'rxjs';
import {UserDto} from '../../auth/shared/dto/user.dto';

@Component({
  selector: 'etmr-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public user$: Observable<UserDto>;

  constructor(private _projectCreation: ProjectCreationService,
              private _auth: AuthService) {
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

}
