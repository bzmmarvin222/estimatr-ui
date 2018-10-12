import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {SyncableService} from "../services/syncable.service";
import {Operation, SyncableTree} from "sync_ot";

@Directive({
  selector: '[syncableText]'
})
export class SyncableTextDirective implements OnInit {

  @Input() syncableText: SyncableTree<any>;
  private inputElement: HTMLInputElement;

  constructor(private _el: ElementRef,
              private _sync: SyncableService) { }

  ngOnInit(): void {
    this.inputElement = this._el.nativeElement as HTMLInputElement;
    this.inputElement.addEventListener('input', () => this.handleInput());
  }

  private handleInput(): void {
    // TODO: no full replacement
    const operation: Operation = this.syncableText.createReplacement(this.inputElement.value);
    this._sync.sr.queueOperation(operation);
  }

}
