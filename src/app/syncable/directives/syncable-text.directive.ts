import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {SyncableTree} from "../forms/syncable-tree";
import {SyncableService} from "../services/syncable.service";

@Directive({
  selector: '[syncableText]'
})
export class SyncableTextDirective implements OnInit {

  @Input() syncableText: SyncableTree;
  private inputElement: HTMLInputElement;

  constructor(private _el: ElementRef,
              private _sync: SyncableService) { }

  ngOnInit(): void {
    console.log('test');
    this.inputElement = this._el.nativeElement as HTMLInputElement;
    this.inputElement.addEventListener('input', () => this.handleInput());
  }

  private handleInput(): void {
    this._sync.insert(this.syncableText, '' + this.inputElement.value);
  }

}
