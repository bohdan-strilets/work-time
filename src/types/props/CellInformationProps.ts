import { ThemeEnum } from 'types/enums/ThemeEnum';
import { DayInfoType } from 'types/types/WorkUserDataType';

export type CellInformationProps = {
  dayInfo?: DayInfoType | null;
  date: Date;
};

export type DayStatusProps = {
  theme: ThemeEnum;
};
