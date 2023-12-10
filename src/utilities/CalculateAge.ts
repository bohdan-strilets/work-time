const CalculateAge = (dateString: string): number => {
  const currentDate = new Date();
  const profileDate = new Date(dateString);

  let timeDifference = currentDate.getTime() - profileDate.getTime();
  const yearsOld = Math.floor(timeDifference / (1000 * 3600 * 24 * 365.25));

  return yearsOld;
};

export default CalculateAge;
