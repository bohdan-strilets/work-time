export type GeneralStatistics = {
  numberWorkingDays: number;
  numberDaysOff: number;
  numberVacationDays: number;
  numberSickDays: number;
  numberAdditionalWorkingDays: number;
  numberWorkingHours: number;
  numberFreeHours: number;
  numberVacationHours: number;
  numberSickHours: number;
  numberAdditionalWorkingHours: number;
  totalDays: number;
  totalHours: number;
  numberFirstShifts: number;
  numberSecondShifts: number;
  numberNightHours: number;
  grossAmountMoneyForWorkingDays: number;
  nettoAmountMoneyForWorkingDays: number;
  grossAmountMoneyForVacationDays: number;
  nettoAmountMoneyForVacationDays: number;
  grossAmountMoneyForSickDays: number;
  nettoAmountMoneyForSickDays: number;
  totalMoneyEarnedGross: number;
  totalMoneyEarnedNetto: number;
  totalTaxPaid: number;
};

export type InformationAboutStatisticsDay = {
  dayId: string;
  value: number;
};

export type ValueByMonth = {
  month: number;
  year: string;
  value: InformationAboutStatisticsDay[];
};

export type StatisticsByMonths = {
  numberWorkingDays: ValueByMonth[];
  numberDaysOff: ValueByMonth[];
  numberVacationDays: ValueByMonth[];
  numberSickDays: ValueByMonth[];
  numberAdditionalWorkingDays: ValueByMonth[];
  numberWorkingHours: ValueByMonth[];
  numberFreeHours: ValueByMonth[];
  numberVacationHours: ValueByMonth[];
  numberSickHours: ValueByMonth[];
  numberAdditionalWorkingHours: ValueByMonth[];
  totalDays: ValueByMonth[];
  totalHours: ValueByMonth[];
  numberFirstShifts: ValueByMonth[];
  numberSecondShifts: ValueByMonth[];
  numberNightHours: ValueByMonth[];
  grossAmountMoneyForWorkingDays: ValueByMonth[];
  nettoAmountMoneyForWorkingDays: ValueByMonth[];
  grossAmountMoneyForVacationDays: ValueByMonth[];
  nettoAmountMoneyForVacationDays: ValueByMonth[];
  grossAmountMoneyForSickDays: ValueByMonth[];
  nettoAmountMoneyForSickDays: ValueByMonth[];
  totalMoneyEarnedGross: ValueByMonth[];
  totalMoneyEarnedNetto: ValueByMonth[];
  totalTaxPaid: ValueByMonth[];
};

export type StatisticsType = {
  _id: string;
  owner: string;
  generalStatistics: GeneralStatistics;
  statisticsByMonths: StatisticsByMonths;
  createdAt: string;
  updatedAt: string;
};
