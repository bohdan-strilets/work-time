const useCalculateDay = () => {
  const calculateEarningsDay = (
    numberHours: number,
    grossHourlyRate: number
  ): string => {
    const sum = numberHours * grossHourlyRate;
    const result = `${numberHours}H * ${grossHourlyRate}PLN = ${sum}PLN`;
    return result;
  };

  return { calculateEarningsDay };
};

export default useCalculateDay;
