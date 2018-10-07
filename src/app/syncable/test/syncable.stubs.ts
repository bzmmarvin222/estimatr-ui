import {of} from "rxjs";
import {Operation, SyncableTree} from "sync_ot";

export const SyncableResourceStub = {
  tree$: of(SyncableTree.root()),
  queueOperation: (op: Operation) => {}
};

export const SyncableServiceStub = {
  sr: SyncableResourceStub,

};
