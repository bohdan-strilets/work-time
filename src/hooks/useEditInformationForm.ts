import { useEffect, useState } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { EditInformationFormInputs } from 'types/inputs/EditInformationFormInputs';
import { HookProps } from 'types/props/EditInformationFormProps';
import GetKeyByDate from 'utilities/GetKeyByDate';
import CalculateWorkedHours from 'utilities/CalculateWorkedHours';
import DetermineShiftNumber from 'utilities/DetermineShiftNumber';
import { StatusValue } from 'types/enums/StatusEnum';
import { useGetOneDayInfoQuery } from '../redux/calendar/calendarApi';
import { DayDataType } from 'types/types/DayType';
import { useUpdateDayMutation } from '../redux/calendar/calendarApi';

const useEditInformationForm = ({ dayId, selectedDate }: HookProps) => {
  const [dayInfo, setDayInfo] = useState<DayDataType | null>(null);
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
  const navigate = useNavigate();
  const selectedStatus = watch('status');
  const { data } = useGetOneDayInfoQuery(dayId as string);
  const [updateDay] = useUpdateDayMutation();

  useEffect(() => {
    if (selectedDate) {
      const key = GetKeyByDate(selectedDate);
      const dayInfo = data?.data?.data[key];
      if (dayInfo) setDayInfo(dayInfo);
    }
  }, [data?.data?.data, selectedDate]);

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
      if (data.startJob && data.finishJob && data.status === StatusValue.work) {
        const workedHours = CalculateWorkedHours(data.startJob, data.finishJob);
        const timeRange = `${data.startJob}-${data.finishJob}`;
        const shift = DetermineShiftNumber(timeRange, workedHours);
        const updateDayDto = {
          data: {
            [key]: {
              status: data.status,
              numberHoursWorked: workedHours,
              time: timeRange,
              workShiftNumber: shift,
              additionalHours: data.additionalHours as unknown as boolean,
            },
          },
        };
        if (dayId) {
          updateDay({ dayId, updateDayDto });
        }
      }
      if (data.startJob && data.finishJob && data.status === StatusValue.vacation) {
        const workedHours = CalculateWorkedHours(data.startJob, data.finishJob);
        const timeRange = `${data.startJob}-${data.finishJob}`;
        const updateDayDto = {
          data: {
            [key]: {
              status: data.status,
              numberHoursWorked: workedHours,
              time: timeRange,
              workShiftNumber: 0,
              additionalHours: data.additionalHours as unknown as boolean,
            },
          },
        };
        if (dayId) {
          updateDay({ dayId, updateDayDto });
        }
      }
      if (data.status === StatusValue.sickLeave) {
        const updateDayDto = {
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
        if (dayId) {
          updateDay({ dayId, updateDayDto });
        }
      }
      if (
        data.status !== StatusValue.work &&
        data.status !== StatusValue.vacation &&
        data.status !== StatusValue.sickLeave
      ) {
        const updateDayDto = {
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
        if (dayId) {
          updateDay({ dayId, updateDayDto });
        }
      }
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
