import { SyncableTextDirective } from './syncable-text.directive';
import {TestBed} from "@angular/core/testing";
import {ElementRef} from "@angular/core";
import {SyncableService} from "../services/syncable.service";
import {SyncableServiceStub} from "../test/syncable.stubs";

describe('SyncableTextDirective', () => {

  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: ElementRef, useClass: MockElementRef },
      { provide: SyncableService, useClass: SyncableServiceStub}
    ]
  }));

  it('should create an instance', () => {
    // const directive = new SyncableTextDirective();
    expect(directive).toBeTruthy();
  });
});
