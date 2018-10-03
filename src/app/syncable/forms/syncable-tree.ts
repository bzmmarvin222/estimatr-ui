import {Operation, OperationType} from "sync_ot";

export interface SyncableTree {
  children: SyncableTree[];
  path: (string | number)[];
  data?: string | number | boolean;
}

export class SyncableTreeUtil {
  public static createEmpty(): SyncableTree {
    return {
      children: [],
      path: []
    };
  }

  public static createChild(parent: SyncableTree, data?: (string | number | boolean | any)): SyncableTree {
    return {
      children: [],
      path: parent.path.concat(['children', parent.children.length]),
      data: data
    };
  }

  public static createAppendOperation(node: SyncableTree): Operation {
    return {
      objectPath: node.path.concat(['children', node.children.length]),
      type: OperationType.FULL_REPLACEMENT,
      data: this.createChild(node)
    };
  }

  //TODO: actually use insertion with indexes
  public static createInsertionOperation(node: SyncableTree, data: string): Operation {
    return {
      objectPath: node.path.concat(['data']),
      type: OperationType.FULL_REPLACEMENT,
      data: data
    }
  }

  public static createDeletionOperation(node: SyncableTree): Operation {
    return {
      objectPath: node.path,
      type: OperationType.DELETE
    }
  }
}
