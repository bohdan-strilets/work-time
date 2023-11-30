import { useEffect, useState } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { EditInformationFormInputs } from 'types/inputs/EditInformationFormInputs';
import { HookProps } from 'types/props/EditInformationFormProps';
import { WorkUserDataType } from 'types/types/WorkUserDataType';
import GetKeyByDate from 'utilities/GetKeyByDate';
import { DayInfoType } from 'types/types/WorkUserDataType';
import useLocalStorage from './useLocalStorage';
import { keys } from 'settings/config';
import CalculateWorkedHours from 'utilities/CalculateWorkedHours';
import DetermineShiftNumber from 'utilities/DetermineShiftNumber';
import { Status } from 'types/enums/StatusEnum';

const useEditInformationForm = ({ dayId, selectedDate }: HookProps) => {
  const [dayInfo, setDayInfo] = useState<DayInfoType | null>(null);
  const [quickStartTime, setQuickStartTime] = useState<string | null>(null);
  const [quickFinishTime, setQuickFinishTime] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
    watch,
  } = useForm<EditInformationFormInputs>();
  const { getDataFromLs, setDataToLs } = useLocalStorage();
  const navigate = useNavigate();
  const selectedStatus = watch('status');

  useEffect(() => {
    const dataFromLs: WorkUserDataType[] = getDataFromLs(keys.WORKING_DAYS_KEY_LS);
    const result = dataFromLs.find(item => item.id === dayId);
    if (selectedDate && result) {
      const key = GetKeyByDate(selectedDate);
      const dayInfo = result.data[key];
      setDayInfo(dayInfo);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dayId, selectedDate]);

  useEffect(() => {
    if (quickStartTime) {
      setValue('startJob', quickStartTime);
    }
    if (quickFinishTime) {
      setValue('finishJob', quickFinishTime);
    }
  }, [quickFinishTime, quickStartTime, setValue]);

  useEffect(() => {
    if (dayInfo) {
      const [startTime, endTime] = dayInfo?.time.split('-');
      setValue('status', dayInfo.status);
      setValue('startJob', startTime);
      setValue('finishJob', endTime);
      setValue('additionalHours', dayInfo.additionalHours as any);
    }
  }, [dayInfo, setValue]);

  const onSubmit: SubmitHandler<EditInformationFormInputs> = data => {
    if (selectedDate) {
      const key = GetKeyByDate(selectedDate);
      let result = {};
      if (data.startJob && data.finishJob && data.status === Status.work) {
        const workedHours = CalculateWorkedHours(data.startJob, data.finishJob);
        const timeRange = `${data.startJob}-${data.finishJob}`;
        const shift = DetermineShiftNumber(timeRange, workedHours);
        result = {
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
      }
      if (data.startJob && data.finishJob && data.status === Status.vacation) {
        const workedHours = CalculateWorkedHours(data.startJob, data.finishJob);
        const timeRange = `${data.startJob}-${data.finishJob}`;
        result = {
          id: Date.now(),
          data: {
            [key]: {
              status: data.status,
              numberHoursWorked: workedHours,
              time: timeRange,
              workShiftNumber: 0,
              additionalHours: data.additionalHours,
            },
          },
        };
      }
      if (data.status === Status.sickLeave) {
        result = {
          id: Date.now(),
          data: {
            [key]: {
              status: data.status,
              numberHoursWorked: 12,
              time: '06:00-18:00',
              workShiftNumber: 0,
              additionalHours: false,
            },
          },
        };
      }
      if (
        data.status !== Status.work &&
        data.status !== Status.vacation &&
        data.status !== Status.sickLeave
      ) {
        result = {
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
      }
      const dataFromLs: WorkUserDataType[] = getDataFromLs(keys.WORKING_DAYS_KEY_LS);
      const filtredDataFromLs = dataFromLs.filter(item => item.id !== dayId);
      const dataToLs = [...filtredDataFromLs, result];
      setDataToLs(keys.WORKING_DAYS_KEY_LS, dataToLs);
    }
    navigate('/calendar');
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    Controller,
    control,
    dayInfo,
    quickStartTime,
    quickFinishTime,
    setQuickStartTime,
    setQuickFinishTime,
    selectedStatus,
  };
};

export default useEditInformationForm;
