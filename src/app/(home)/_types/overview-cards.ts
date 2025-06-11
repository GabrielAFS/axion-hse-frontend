export interface IOverviewDataValue {
  value: number | string;
  percentual?: number;
}

export interface IOverviewData {
  [key: string]: IOverviewDataValue;
}
