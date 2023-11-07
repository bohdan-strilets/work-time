import useModalWindow from "./useModalWindow";

const useCalculateDay = () => {
  const { modalsName, openModal } = useModalWindow();

  const calculateEarningsDay = (
    numberHours: number,
    grossHourlyRate: number
  ): string => {
    const sum = numberHours * grossHourlyRate;
    const result = `${numberHours}H * ${grossHourlyRate}PLN = ${sum}PLN`;
    return result;
  };

  const handleEditBtnClick = () => {
    openModal(modalsName.cellDayEdit);
  };

  const handleDeleteBtnClick = () => {
    openModal(modalsName.cellDayDelete);
  };

  return {
    calculateEarningsDay,
    handleEditBtnClick,
    handleDeleteBtnClick,
    modalsName,
  };
};

export default useCalculateDay;
