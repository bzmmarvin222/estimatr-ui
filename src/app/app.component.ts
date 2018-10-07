import {ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {SyncableService} from "./syncable/services/syncable.service";
import {SyncableTree} from "sync_ot";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {

  public data$: Observable<SyncableTree<any>>;

  constructor(private _sync: SyncableService,
              private _ref: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.data$ = this._sync.tree$;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }


public change(x) {
    console.log(x);
}

  public addToChild(child: SyncableTree<any>): void {
    console.log(child);
    const operation = child.createChildAppend('foo');
    console.log(operation);
    this._sync.sr.queueOperation(operation);
  }

  public rmChild(child: SyncableTree<any>): void {
    const operation = child.createNodeDeletion();
    this._sync.sr.queueOperation(operation);
  }
}
