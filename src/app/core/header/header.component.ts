import {Component, OnInit} from '@angular/core';
import {ProjectCreationService} from '../services/project-creation.service';

@Component({
  selector: 'etmr-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _projectCreation: ProjectCreationService) {
  }

  ngOnInit() {
  }

  public createProject(): void {
    this._projectCreation.initProjectCreation();
  }

  public joinSession(): void {
    this._projectCreation.switchSession();
  }

}
