import {Pipe, PipeTransform} from '@angular/core';
import {SyncableTree} from 'sync_ot';
import {EstimationNode} from '../../estimatr-common/lib/estimation/estimation';
import {calculateEffort} from '../../shared/util/estimation-tree.util';

@Pipe({
  name: 'estimationTreeSum',
  pure: false
})
export class EstimationTreeSumPipe implements PipeTransform {

  transform(root: SyncableTree<EstimationNode>): number {

    return calculateEffort(root);
  }
}
