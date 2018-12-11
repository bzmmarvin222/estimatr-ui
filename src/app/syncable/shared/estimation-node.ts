export interface EstimationLeaf {
  taskDescription: string;
  effortInManDays: number;
}

export type EstimationDescription = string;

export type EstimationNode = EstimationDescription | EstimationLeaf;
