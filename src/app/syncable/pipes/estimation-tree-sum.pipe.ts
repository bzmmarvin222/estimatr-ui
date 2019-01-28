import {Pipe, PipeTransform} from '@angular/core';
import {SyncableTree} from 'sync_ot';
import {EstimationLeaf, EstimationNode} from '../../estimatr-common/lib/estimation/estimation';
import {RiskFactors} from '../../estimatr-common/lib/estimation/risk';

@Pipe({
  name: 'estimationTreeSum',
  pure: false
})
export class EstimationTreeSumPipe implements PipeTransform {

  transform(root: SyncableTree<EstimationNode>, factors: RiskFactors): number {
    return root.children.reduce((prev: number, curr: SyncableTree<EstimationNode>) => prev + this.mapWorkItemPackage(curr, factors), 0);
  }

  private mapWorkItemPackage(pck: SyncableTree<EstimationNode>, factors: RiskFactors): number {
    const items = pck.children as SyncableTree<EstimationLeaf>[];
    return items.reduce((prev: number, curr: SyncableTree<EstimationLeaf>) => prev + this.mapItem(curr.data, factors), 0);
  }

  private mapItem(leaf: EstimationLeaf, factors: RiskFactors): number {
    return +factors[leaf.risk] * leaf.effortInManDays;
  }

}
