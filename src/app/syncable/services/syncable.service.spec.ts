import { TestBed } from '@angular/core/testing';

import { SyncableService } from './syncable.service';
import {Operation, SyncableTree} from "sync_ot";
import { of } from "rxjs";


describe('SyncableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SyncableService = TestBed.get(SyncableService);
    expect(service).toBeTruthy();
  });
});
