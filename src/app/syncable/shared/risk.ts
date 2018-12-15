import {DropdownValue} from './dropdown';

export type Risk = 'low' | 'moderate' | 'high' | 'showstopper';

export const RiskDropdownValues: DropdownValue<Risk>[] = [
  {technicalValue: 'low', viewValue: 'Low'},
  {technicalValue: 'moderate', viewValue: 'Moderate'},
  {technicalValue: 'high', viewValue: 'High'},
  {technicalValue: 'showstopper', viewValue: 'Possible showstopper'}
];

export interface RiskFactors {
  low: number;
  moderate: number;
  high: number;
  showstopper: number;
}
