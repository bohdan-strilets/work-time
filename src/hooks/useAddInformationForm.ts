import { useEffect, useState } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import axios, { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { AddInformationFormInputs } from 'types/inputs/AddInformationFormInputs';
import { HookProps } from 'types/props/AddInformationFormProps';
import useModalWindow from './useModalWindow';
import GetKeyByDate from 'utilities/GetKeyByDate';
import CalculateWorkedHours from 'utilities/CalculateWorkedHours';
import DetermineShiftNumber from 'utilities/DetermineShiftNumber';
import { Status } from 'types/enums/StatusEnum';
import { useCreateDayMutation } from '../redux/calendar/calendarApi';
import useCalculateDay from './useCalculateDay';
import useCalculateTax from './useCalculateTax';
import { useAppSelector } from './useAppSelector';
import { getSalaryPerHour } from '../redux/user/userSelectors';
import useSoundSprite from './useSoundSprite';
import { SoundNamesEnum } from 'types/enums/SoundNamesEnum';
import { CreateDayType } from 'types/types/CreateDayType';
import CustomErrorHandler from 'utilities/CustomErrorHandler';
import { CalendarResponseType } from 'types/types/CalendarResponseType';
import { ErrorLngKeys } from 'types/locales/ErrorsLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';
import { translateLabel } from 'locales/config';

const useAddInformationForm = ({ selectedDate }: HookProps) => {
  const [quickStartTime, setQuickStartTime] = useState<string | null>(null);
  const [quickFinishTime, setQuickFinishTime] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { closeModal } = useModalWindow();
  const [createDay] = useCreateDayMutation();
  const { play } = useSoundSprite();

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
  const additionalHours = watch('additionalHours') ?? false;
  const startTime = watch('startJob') ?? '';
  const endTime = watch('finishJob') ?? '';
  const timeRange = `${startTime}-${endTime}`;
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
    if (quickStartTime) {
      setValue('startJob', quickStartTime);
    }
    if (quickFinishTime) {
      setValue('finishJob', quickFinishTime);
    }
  }, [quickFinishTime, quickStartTime, setValue]);

  const onSubmit: SubmitHandler<AddInformationFormInputs> = async data => {
    if (selectedDate) {
      const key = GetKeyByDate(selectedDate);
      let result: CreateDayType | null = null;
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
        result = {
          data: {
            [key]: {
              status: data.status,
              numberHoursWorked: numberHours,
              time: timeRange,
              workShiftNumber: workShiftNumber,
              additionalHours: data.additionalHours as boolean,
              grossEarnings,
              netEarnings,
            },
          },
        };
      }
      if (data.startJob && data.finishJob && data.status === Status.vacation) {
        const grossEarnings = calculateProfitForVacation(numberHours, salaryPerHour);
        const netEarnings = calculateTotal(grossEarnings);
        result = {
          data: {
            [key]: {
              status: data.status,
              numberHoursWorked: numberHours,
              time: timeRange,
              workShiftNumber: 0,
              additionalHours: false,
              grossEarnings,
              netEarnings,
            },
          },
        };
      }
      if (data.status === Status.vacation || data.status === Status.sickLeave) {
        const startVacationDay = '06:00';
        const endVacationDay = '18:00';
        const timeRange = `${startVacationDay}-${endVacationDay}`;
        const grossEarnings = calculateProfitForVacation(12, salaryPerHour);
        const netEarnings = calculateTotal(grossEarnings);
        result = {
          data: {
            [key]: {
              status: data.status,
              numberHoursWorked: 12,
              time: timeRange,
              workShiftNumber: 0,
              additionalHours: false,
              grossEarnings,
              netEarnings,
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
      }
      if (result !== null) {
        setIsLoading(true);
        await createDay(result);
        try {
          setIsLoading(false);
          closeModal();
          play({ id: SoundNamesEnum.Success });
        } catch (error: any) {
          setIsLoading(false);
          if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError<CalendarResponseType>;
            if (axiosError.response) {
              const serverError = axiosError.response.data as CalendarResponseType;
              CustomErrorHandler(serverError);
            } else {
              toast.error(translateLabel(ErrorLngKeys.GeneralAxiosError, LocalesKeys.error));
            }
          } else {
            toast.error(translateLabel(ErrorLngKeys.GeneralError, LocalesKeys.error));
          }
        }
      }
    }
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
    isLoading,
  };
};

export default useAddInformationForm;
