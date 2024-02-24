const DetermineShiftNumber = (timeRange: string, numberHoursWorked: number): number => {
  const [startStr] = timeRange.split('-');
  const startTime = parseInt(startStr.split(':')[0], 10);
  const startFirstShift = 6;
  const startSecondShift = 18;
  const shiftDuration = 12;
  const firstShift = 1;
  const secondShift = 2;
  const noShift = 0;
  const lastStartFirstShift = 14;

  if (startTime >= startSecondShift && numberHoursWorked <= shiftDuration) {
    return secondShift;
  }
  if (
    startTime >= startFirstShift &&
    startTime < lastStartFirstShift &&
    startTime < startSecondShift &&
    numberHoursWorked <= shiftDuration
  ) {
    return firstShift;
  }
  if (startTime >= lastStartFirstShift && startTime < startSecondShift) {
    return firstShift;
  }
  return noShift;
};

export default DetermineShiftNumber;
