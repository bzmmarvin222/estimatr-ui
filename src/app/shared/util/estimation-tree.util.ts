import {EstimationLeaf, EstimationNode, EstimationRoot} from '../../estimatr-common/lib/estimation/estimation';
import {RiskFactors} from '../../estimatr-common/lib/estimation/risk';
import {SyncableTree} from 'sync_ot';

export const calculateEffort = (node: SyncableTree<EstimationNode>): number => {
  const riskFactors = (node.data as EstimationRoot).riskFactors;
  return node.children.reduce((prev: number, curr: SyncableTree<EstimationNode>) => prev + calculateItemPackageEffort(curr, riskFactors), 0);
};

const calculateItemPackageEffort = (node: SyncableTree<EstimationNode>, factors: RiskFactors): number => {
  const items = node.children as SyncableTree<EstimationLeaf>[];
  return items.reduce((prev: number, curr: SyncableTree<EstimationLeaf>) => prev + calculateLeafEffort(curr.data, factors), 0);
};

const calculateLeafEffort = (leaf: EstimationLeaf, factors: RiskFactors): number => {
  return +factors[leaf.risk] * leaf.effortInManDays;
};
