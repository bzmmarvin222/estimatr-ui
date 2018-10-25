import {Directive, ElementRef, Input, OnDestroy, OnInit} from '@angular/core';
import {SyncableService} from '../services/syncable.service';
import {Operation, SyncableTree} from 'sync_ot';
import {ObjectPath} from "sync_ot/dist/operation/object-traversing-util";

@Directive({
  selector: '[syncableText]'
})
export class SyncableTextDirective implements OnInit, OnDestroy {

  @Input() syncableText: SyncableTree<any>;
  @Input() objectPath: ObjectPath = [];
  @Input() onlyNumbers: boolean = false;

  private _inputElement: HTMLInputElement;
  private _subscription;

  constructor(private _el: ElementRef,
              private _sync: SyncableService) {
  }

  ngOnInit(): void {
    this._inputElement = this._el.nativeElement as HTMLInputElement;
    this._inputElement.addEventListener('input', evt => this.handleInput(evt));
    this.subscribe();
  }

  private subscribe(): void {
    // TODO: find out why types do not match
    let toSubscribe$;
    if (this.objectPath && this.objectPath.length > 0) {
      toSubscribe$ = this.syncableText.getDataChangesFor$(...this.objectPath);
    } else {
      toSubscribe$ = this.syncableText.dataChanges$;
    }
    this._subscription = toSubscribe$.subscribe(data => this._inputElement.value = data);
  }

  private handleInput(event): void {
    // TODO: no full replacement
    const operation: Operation = this.syncableText.createReplacement(this._inputElement.value, ...this.objectPath);
    this._sync.sr.queueOperation(operation);
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
}
