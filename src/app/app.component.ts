import {Component, OnInit} from '@angular/core';
import {SyncableService} from "./syncable/services/syncable.service";
import {SyncableTree} from "sync_ot";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public data$: Observable<SyncableTree<any>>;

  constructor(private _sync: SyncableService) {
  }

  ngOnInit(): void {
    this.data$ = this._sync.tree$;
  }

}
