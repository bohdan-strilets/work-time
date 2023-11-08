const CalculateWorkedHours = (start: string, finish: string): number => {
  const startTimeParts = start.split(":");
  const finishTimeParts = finish.split(":");

  const startHour = parseInt(startTimeParts[0], 10);
  const startMinute = parseInt(startTimeParts[1], 10);
  const finishHour = parseInt(finishTimeParts[0], 10);
  const finishMinute = parseInt(finishTimeParts[1], 10);

  let hoursDiff = finishHour - startHour;
  let minutesDiff = finishMinute - startMinute;

  if (minutesDiff < 0) {
    hoursDiff -= 1;
    minutesDiff += 60;
  }

  if (hoursDiff < 0) {
    hoursDiff += 24;
  }

  return hoursDiff + minutesDiff / 60;
};

export default CalculateWorkedHours;
