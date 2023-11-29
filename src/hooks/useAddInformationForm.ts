import { useEffect, useState } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { AddInformationFormInputs } from 'types/inputs/AddInformationFormInputs';
import { HookProps } from 'types/props/AddInformationFormProps';
import useModalWindow from './useModalWindow';
import GetKeyByDate from 'utilities/GetKeyByDate';
import useLocalStorage from './useLocalStorage';
import { keys } from 'settings/config';
import CalculateWorkedHours from 'utilities/CalculateWorkedHours';
import DetermineShiftNumber from 'utilities/DetermineShiftNumber';

const useAddInformationForm = ({ selectedDate }: HookProps) => {
  const [quickStartTime, setQuickStartTime] = useState<string | null>(null);
  const [quickFinishTime, setQuickFinishTime] = useState<string | null>(null);
  const { closeModal } = useModalWindow();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
    setValue,
  } = useForm<AddInformationFormInputs>();
  const { getDataFromLs, setDataToLs } = useLocalStorage();
  const selectedStatus = watch('status');

  useEffect(() => {
    if (quickStartTime) {
      setValue('startJob', quickStartTime);
    }
    if (quickFinishTime) {
      setValue('finishJob', quickFinishTime);
    }
  }, [quickFinishTime, quickStartTime, setValue]);

  const onSubmit: SubmitHandler<AddInformationFormInputs> = data => {
    if (selectedDate) {
      const key = GetKeyByDate(selectedDate);
      if (data.startJob && data.finishJob) {
        const workedHours = CalculateWorkedHours(data.startJob, data.finishJob);
        const timeRange = `${data.startJob}-${data.finishJob}`;
        const shift = DetermineShiftNumber(timeRange, workedHours);
        const result = {
          id: Date.now(),
          data: {
            [key]: {
              status: data.status,
              numberHoursWorked: workedHours,
              time: timeRange,
              workShiftNumber: shift,
              additionalHours: data.additionalHours,
            },
          },
        };
        const dataFromLs = getDataFromLs(keys.WORKING_DAYS_KEY_LS);
        if (dataFromLs) {
          const dataToLs = [...dataFromLs, result];
          setDataToLs(keys.WORKING_DAYS_KEY_LS, dataToLs);
        } else {
          const dataToLs = [result];
          setDataToLs(keys.WORKING_DAYS_KEY_LS, dataToLs);
        }
      } else {
        const result = {
          id: Date.now(),
          data: {
            [key]: {
              status: data.status,
              numberHoursWorked: 0,
              time: '-',
              workShiftNumber: 0,
              additionalHours: false,
            },
          },
        };
        const dataFromLs = getDataFromLs(keys.WORKING_DAYS_KEY_LS);
        if (dataFromLs) {
          const dataToLs = [...dataFromLs, result];
          setDataToLs(keys.WORKING_DAYS_KEY_LS, dataToLs);
        } else {
          const dataToLs = [result];
          setDataToLs(keys.WORKING_DAYS_KEY_LS, dataToLs);
        }
      }
    }
    closeModal();
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    Controller,
    control,
    selectedStatus,
    setQuickStartTime,
    setQuickFinishTime,
    quickStartTime,
    quickFinishTime,
  };
};

export default useAddInformationForm;
