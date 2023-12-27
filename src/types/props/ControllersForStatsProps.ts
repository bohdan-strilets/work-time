import { FilterDateType } from 'types/types/FilterDateType';

export type ControllersForStatsProps = {
  getFilterDate: (start: FilterDateType, end: FilterDateType) => void;
};
