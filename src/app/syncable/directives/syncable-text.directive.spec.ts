import {SyncableTextDirective} from './syncable-text.directive';
import {TestBed} from '@angular/core/testing';
import {ElementRef} from '@angular/core';
import {SyncableService} from '../services/syncable.service';
import {SyncableServiceStub} from '../test/syncable.stubs';

const mockElementRef = {
  nativeElement: new HTMLInputElement()
};

describe('SyncableTextDirective', () => {

  let elemRef: ElementRef;
  let syncService: SyncableService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: ElementRef, useClass: mockElementRef},
        {provide: SyncableService, useClass: SyncableServiceStub}
      ]
    });
    elemRef = TestBed.get(ElementRef);
    syncService = TestBed.get(SyncableService);
  });

  it('should create an instance', () => {
    const directive = new SyncableTextDirective(elemRef, syncService);
    expect(directive).toBeTruthy();
  });
});
