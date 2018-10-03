import {Component, OnInit} from '@angular/core';
import {SyncableService} from "./syncable/services/syncable.service";
import {SyncableTree} from "./syncable/forms/syncable-tree";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public data: SyncableTree;

  constructor(private _sync: SyncableService) {
  }

  ngOnInit(): void {
    this.data = this._sync.tree;
  }

  public add(): void {
    this._sync.appendToRoot();
  }

  public addToChild(child: SyncableTree): void {
    this._sync.appendTo(child);
  }
}
