import { useEffect, useState } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { EditInformationFormInputs } from 'types/inputs/EditInformationFormInputs';
import { HookProps } from 'types/props/EditInformationFormProps';
import GetKeyByDate from 'utilities/GetKeyByDate';
import CalculateWorkedHours from 'utilities/CalculateWorkedHours';
import DetermineShiftNumber from 'utilities/DetermineShiftNumber';
import { Status } from 'types/enums/StatusEnum';
import { useGetOneDayInfoQuery } from '../redux/calendar/calendarApi';
import { DayDataType } from 'types/types/DayType';
import { useUpdateDayMutation } from '../redux/calendar/calendarApi';
import useCalculateDay from './useCalculateDay';
import { useAppSelector } from './useAppSelector';
import { getSalaryPerHour } from '../redux/user/userSelectors';
import useCalculateTax from './useCalculateTax';

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
  const additionalHours = watch('additionalHours') ?? false;
  const startTime = watch('startJob') ?? '';
  const endTime = watch('finishJob') ?? '';
  const timeRange = `${startTime}-${endTime}`;
  const { data } = useGetOneDayInfoQuery(dayId ?? '');
  const [updateDay] = useUpdateDayMutation();
  const numberHours = CalculateWorkedHours(startTime, endTime);
  const workShiftNumber = DetermineShiftNumber(timeRange, numberHours);
  const salaryPerHour = useAppSelector(getSalaryPerHour) ?? 0;

  const { calculateEarningsDay, calculateProfitForVacation, additional } = useCalculateDay({
    additionalHours,
    time: timeRange,
    numberHoursWorked: numberHours,
    workShiftNumber,
    status: selectedStatus,
  });
  const { calculateTotal } = useCalculateTax({ earningForDay: 0 });

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
      if (data.startJob && data.finishJob && data.status === Status.work) {
        let grossEarnings = 0;
        if (data.additionalHours) {
          grossEarnings = calculateEarningsDay(
            numberHours,
            salaryPerHour,
            data.status,
            additional?.['50%'].numberHours,
            additional?.['100%'].numberHours,
          );
        } else {
          grossEarnings = calculateEarningsDay(numberHours, salaryPerHour, data.status);
        }
        const netEarnings = calculateTotal(grossEarnings);
        const updateDayDto = {
          data: {
            [key]: {
              status: data.status,
              numberHoursWorked: numberHours,
              time: timeRange,
              workShiftNumber: workShiftNumber,
              additionalHours: data.additionalHours as unknown as boolean,
              grossEarnings,
              netEarnings,
            },
          },
        };
        if (dayId) {
          updateDay({ dayId, updateDayDto });
        }
      }
      if (data.startJob && data.finishJob && data.status === Status.vacation) {
        const grossEarnings = calculateProfitForVacation(numberHours, salaryPerHour);
        const netEarnings = calculateTotal(grossEarnings);
        const updateDayDto = {
          data: {
            [key]: {
              status: data.status,
              numberHoursWorked: numberHours,
              time: timeRange,
              workShiftNumber: 0,
              additionalHours: data.additionalHours ?? false,
              grossEarnings,
              netEarnings,
            },
          },
        };
        if (dayId) {
          updateDay({ dayId, updateDayDto });
        }
      }
      if (data.status === Status.sickLeave) {
        const grossEarnings = calculateProfitForVacation(12, salaryPerHour);
        const netEarnings = calculateTotal(grossEarnings);
        const updateDayDto = {
          data: {
            [key]: {
              status: data.status,
              numberHoursWorked: 12,
              time: '06:00-18:00',
              workShiftNumber: 0,
              additionalHours: false,
              grossEarnings,
              netEarnings,
            },
          },
        };
        if (dayId) {
          updateDay({ dayId, updateDayDto });
        }
      }
      if (
        data.status !== Status.work &&
        data.status !== Status.vacation &&
        data.status !== Status.sickLeave
      ) {
        const updateDayDto = {
          data: {
            [key]: {
              status: data.status,
              numberHoursWorked: 0,
              time: '-',
              workShiftNumber: 0,
              additionalHours: false,
              grossEarnings: 0,
              netEarnings: 0,
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
