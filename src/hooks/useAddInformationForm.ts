import { useEffect, useState } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { AddInformationFormInputs } from 'types/inputs/AddInformationFormInputs';
import { HookProps } from 'types/props/AddInformationFormProps';
import useModalWindow from './useModalWindow';
import GetKeyByDate from 'utilities/GetKeyByDate';
import CalculateWorkedHours from 'utilities/CalculateWorkedHours';
import DetermineShiftNumber from 'utilities/DetermineShiftNumber';
import { StatusValue } from 'types/enums/StatusEnum';
import { useCreateDayMutation } from '../redux/calendar/calendarApi';

const useAddInformationForm = ({ selectedDate }: HookProps) => {
  const [quickStartTime, setQuickStartTime] = useState<string | null>(null);
  const [quickFinishTime, setQuickFinishTime] = useState<string | null>(null);
  const { closeModal } = useModalWindow();
  const [createDay] = useCreateDayMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
    setValue,
  } = useForm<AddInformationFormInputs>();

  const selectedStatus = watch('status');
  const selectedVacationHours = watch('selectVacationHours');

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
      if (data.startJob && data.finishJob && data.status === StatusValue.work) {
        const workedHours = CalculateWorkedHours(data.startJob, data.finishJob);
        const timeRange = `${data.startJob}-${data.finishJob}`;
        const shift = DetermineShiftNumber(timeRange, workedHours);
        const result = {
          data: {
            [key]: {
              status: data.status,
              numberHoursWorked: workedHours,
              time: timeRange,
              workShiftNumber: shift,
              additionalHours: data.additionalHours as boolean,
            },
          },
        };
        createDay(result);
      }
      if (data.startJob && data.finishJob && data.status === StatusValue.vacation) {
        const vacationHours = CalculateWorkedHours(data.startJob, data.finishJob);
        const timeRange = `${data.startJob}-${data.finishJob}`;
        const result = {
          data: {
            [key]: {
              status: data.status,
              numberHoursWorked: vacationHours,
              time: timeRange,
              workShiftNumber: 0,
              additionalHours: false,
            },
          },
        };
        createDay(result);
      }
      if (data.status === StatusValue.vacation || data.status === StatusValue.sickLeave) {
        const startVacationDay = '06:00';
        const endVacationDay = '18:00';
        const vacationHours = CalculateWorkedHours(startVacationDay, endVacationDay);
        const timeRange = `${startVacationDay}-${endVacationDay}`;
        const result = {
          data: {
            [key]: {
              status: data.status,
              numberHoursWorked: vacationHours,
              time: timeRange,
              workShiftNumber: 0,
              additionalHours: false,
            },
          },
        };
        createDay(result);
      }
      if (
        data.status !== StatusValue.work &&
        data.status !== StatusValue.vacation &&
        data.status !== StatusValue.sickLeave
      ) {
        const result = {
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
        createDay(result);
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
    selectedVacationHours,
  };
};

export default useAddInformationForm;
