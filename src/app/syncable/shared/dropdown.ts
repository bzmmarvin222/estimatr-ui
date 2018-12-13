import {Risk} from "./estimation";

export interface DropdownValue<T> {
  technicalValue: T,
  viewValue: string
}

export const RiskDrowndownValues: DropdownValue<Risk>[] = [
  {technicalValue: "low", viewValue: 'Low'},
  {technicalValue: "moderate", viewValue: 'Moderate'},
  {technicalValue: "high", viewValue: 'High'},
  {technicalValue: "showstopper", viewValue: 'Possible showstopper'}
];
