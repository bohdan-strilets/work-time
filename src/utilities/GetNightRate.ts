const GetNightRate = (): number => {
  const minimumHourlyRate = 23.5;
  const extraPayForNightShift = 20;
  return (minimumHourlyRate * extraPayForNightShift) / 100;
};

export default GetNightRate;
