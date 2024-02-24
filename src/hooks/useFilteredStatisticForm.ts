import { useEffect } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import MonthOptions from 'utilities/dropdownListOptions/MonthOption';
import YearOptions from 'utilities/YearOptions';
import { ControllersForStatsProps } from 'types/props/ControllersForStatsProps';
import { StatisticsFilteringFormInputs } from 'types/inputs/StatisticsFilteringFormInputs';
import StatisticsFilteringFormSchema from 'validations/StatisticsFilteringFormSchema';

const useFilteredStatisticForm = ({ getFilterDate }: ControllersForStatsProps) => {
  const validation = {
    resolver: yupResolver<StatisticsFilteringFormInputs>(StatisticsFilteringFormSchema),
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm<StatisticsFilteringFormInputs>(validation);

  useEffect(() => {
    setValue('startMonth', MonthOptions[0].value);
    setValue('startYear', YearOptions[0].value);
    setValue('endMonth', MonthOptions[MonthOptions.length - 1].value);
    setValue('endYear', YearOptions[YearOptions.length - 1].value);
  }, [setValue]);

  const onSubmit: SubmitHandler<StatisticsFilteringFormInputs> = data => {
    const start = { month: Number(data.startMonth), year: data.startYear };
    const end = { month: Number(data.endMonth), year: data.endYear };
    getFilterDate(start, end);
  };

  return { handleSubmit, onSubmit, control, Controller, errors };
};

export default useFilteredStatisticForm;
