const numberMillisecondsInOneSecond = 1000;
const numberSecondsInOneHour = 3600;
const numberHoursInOneDay = 24;
const averageNumberDaysPerYear = 365.25;

const CalculateAge = (dateString: string): number => {
  const currentDate = new Date();
  const dateBirth = new Date(dateString);

  let timeDifference = currentDate.getTime() - dateBirth.getTime();
  const yearsOld = Math.floor(
    timeDifference /
      (numberMillisecondsInOneSecond *
        numberSecondsInOneHour *
        numberHoursInOneDay *
        averageNumberDaysPerYear),
  );

  return yearsOld;
};

export default CalculateAge;
