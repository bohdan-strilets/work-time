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
  statisticsByMonths: StatisticsByMonths;
  createdAt: string;
  updatedAt: string;
};
