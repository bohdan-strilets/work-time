import { DayInfoType } from "types/types/WorkUserDataType";

export type DayInfoProps = Pick<
  DayInfoType,
  | "status"
  | "numberHoursWorked"
  | "time"
  | "workShiftNumber"
  | "additionalHours"
> & { date: Date | null; dateTransform: (date: Date) => string };

export type ContainerProps = {
  margin?: string;
  justifyContent?: string;
  displayBlock?: boolean;
};

export type TextProps = {
  fontSize?: string;
  fontWeight?: number;
  margin?: string;
  color?: string;
};

export type ExtraTimeStatusProps = Pick<DayInfoProps, "additionalHours">;
