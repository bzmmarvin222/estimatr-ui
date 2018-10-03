export interface SyncableTree {
  children: SyncableTree[];
  path: (string | number)[];
  data: string | number | boolean;
}
