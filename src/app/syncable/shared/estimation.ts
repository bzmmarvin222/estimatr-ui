import {Risk} from "./risk";

export interface EstimationLeaf {
  taskDescription: string;
  effortInManDays: number;
  risk: Risk;
}

export type EstimationDescription = string;

export type EstimationNode = EstimationDescription | EstimationLeaf;
