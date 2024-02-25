const minutesInHour = 60;
const hoursInDay = 24;

const CalculateWorkedHours = (startTime: string, finishTime: string): number => {
  const [startHour, startMinute] = startTime.split(':').map(Number);
  const [finishHour, finishMinute] = finishTime.split(':').map(Number);

  const totalStartMinutes = startHour * minutesInHour + startMinute;
  const totalFinishMinutes = finishHour * minutesInHour + finishMinute;
  let totalDiffMinutes = totalFinishMinutes - totalStartMinutes;

  if (totalDiffMinutes < 0) {
    totalDiffMinutes += hoursInDay * minutesInHour;
  }

  return totalDiffMinutes / minutesInHour;
};

export default CalculateWorkedHours;
