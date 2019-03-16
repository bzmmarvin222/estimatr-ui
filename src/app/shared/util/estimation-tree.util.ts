import {EstimationLeaf, EstimationNode} from '../../estimatr-common/lib/estimation/estimation';
import {RiskFactors} from '../../estimatr-common/lib/estimation/risk';
import {SyncableTree} from 'sync_ot';

/**export const calculateEffort = (node: SyncableTree<EstimationNode>, riskFactors: RiskFactors): number => {
  return node.children.reduce((prev: number, curr: SyncableTree<EstimationNode>) => prev + this.mapWorkItemPackage(curr, riskFactors), 0);
};

private mapWorkItemPackage(pck: SyncableTree<EstimationNode>, factors: RiskFactors): number {
  const items = pck.children as SyncableTree<EstimationLeaf>[];
  return items.reduce((prev: number, curr: SyncableTree<EstimationLeaf>) => prev + this.mapItem(curr.data, factors), 0);
}

private mapItem(leaf: EstimationLeaf, factors: RiskFactors): number {
  return +factors[leaf.risk] * leaf.effortInManDays;
}**/
