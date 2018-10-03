import { TestBed } from '@angular/core/testing';

import { SyncableService } from './syncable.service';

describe('SyncableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SyncableService = TestBed.get(SyncableService);
    expect(service).toBeTruthy();
  });
});
