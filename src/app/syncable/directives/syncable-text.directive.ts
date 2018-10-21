import {Directive, ElementRef, Input, OnDestroy, OnInit} from '@angular/core';
import {SyncableService} from '../services/syncable.service';
import {Operation, SyncableTree} from 'sync_ot';

@Directive({
  selector: '[syncableText]'
})
export class SyncableTextDirective implements OnInit, OnDestroy {

  @Input() syncableText: SyncableTree<any>;
  private _inputElement: HTMLInputElement;
  private _subscription;

  constructor(private _el: ElementRef,
              private _sync: SyncableService) {
  }

  ngOnInit(): void {
    this._inputElement = this._el.nativeElement as HTMLInputElement;
    this._inputElement.addEventListener('input', () => this.handleInput());
    this._subscription = this.syncableText.dataChanges$.subscribe(data => this._inputElement.value = data);
  }

  private handleInput(): void {
    // TODO: no full replacement
    const operation: Operation = this.syncableText.createReplacement(this._inputElement.value);
    this._sync.sr.queueOperation(operation);
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
}
