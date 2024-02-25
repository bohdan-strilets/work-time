const GetNightRate = (): number => {
  const minimumRatePerHourInPoland = 27.7;
  const extraPayForNightShiftInPercentage = 20;
  return (minimumRatePerHourInPoland * extraPayForNightShiftInPercentage) / 100;
};

export default GetNightRate;
