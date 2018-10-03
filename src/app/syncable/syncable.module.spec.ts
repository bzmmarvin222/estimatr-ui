import { SyncableModule } from './syncable.module';

describe('SyncableModule', () => {
  let syncableModule: SyncableModule;

  beforeEach(() => {
    syncableModule = new SyncableModule();
  });

  it('should create an instance', () => {
    expect(syncableModule).toBeTruthy();
  });
});
