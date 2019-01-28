import {DropdownValue} from './dropdown';
import {Risk} from '../../estimatr-common/lib/estimation/risk';

export const RiskDropdownValues: DropdownValue<Risk>[] = [
  {technicalValue: 'low', viewValue: 'Low'},
  {technicalValue: 'moderate', viewValue: 'Moderate'},
  {technicalValue: 'high', viewValue: 'High'},
  {technicalValue: 'showstopper', viewValue: 'Possible showstopper'}
];
