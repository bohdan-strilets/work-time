import { useTranslation } from 'react-i18next';
import DropdownList from 'components/UI/DropdownList';
import Button from 'components/UI/Button';
import Checkbox from 'components/UI/Checkbox';
import QuickTiming from 'components/UI/QuickTiming';
import Loader from 'components/UI/Loader';
import useAddInformationForm from 'hooks/useAddInformationForm';
import { DayOptions, ShortDayOptions } from 'utilities/DayOptions';
import HoursOptions from 'utilities/HoursOptions';
import { AddInformationFormProps } from 'types/props/AddInformationFormProps';
import { Status } from 'types/enums/StatusEnum';
import { LocalesKeys } from 'types/enums/LocalesKeys';
import { CalendarLngKeys } from 'types/locales/CalendarLngKeys';
import { CommonLngKeys } from 'types/locales/CommonLngKeys';
import { useAppSelector } from 'hooks/useAppSelector';
import { getContractType } from '../../../redux/user/userSelectors';
import { ContractTypeEnum } from 'types/enums/ContractTypeEnum';

const AddInformationForm: React.FC<AddInformationFormProps> = ({ selectedDate }) => {
  const {
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
  } = useAddInformationForm({ selectedDate });
  const { t } = useTranslation();
  const contractType = useAppSelector(getContractType);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="status"
          control={control}
          render={({ field }) => (
            <DropdownList
              type="single"
              name="status"
              options={
                contractType === ContractTypeEnum.ContractEmployment ? DayOptions : ShortDayOptions
              }
              label={`${t(CalendarLngKeys.DidYouWorkOrRestToday, { ns: LocalesKeys.calendar })}?`}
              buttonlabel={t(CommonLngKeys.Today, { ns: LocalesKeys.common })}
              height="40px"
              width="100%"
              margin="0 0 var(--small-indent) 0"
              onChange={(value: string | string[]) => field.onChange(value)}
              errors={errors}
              required={true}
              position="relative"
            />
          )}
        />
        {(selectedStatus === Status.work ||
          (selectedStatus === Status.vacation && selectedVacationHours)) && (
          <>
            <Controller
              name="startJob"
              control={control}
              render={({ field }) => (
                <DropdownList
                  type="single"
                  name="startJob"
                  options={HoursOptions}
                  label={`${t(CalendarLngKeys.WhatTimeDidYouArriveAtWork, {
                    ns: LocalesKeys.calendar,
                  })}?`}
                  buttonlabel={t(CommonLngKeys.Start, { ns: LocalesKeys.common })}
                  height="40px"
                  width="100%"
                  margin="0 0 var(--small-indent) 0"
                  defaultValue={quickStartTime ? quickStartTime : null}
                  onChange={(value: string | string[]) => {
                    setQuickStartTime(null);
                    field.onChange(value);
                  }}
                  errors={errors}
                  position="relative"
                />
              )}
            />
            <QuickTiming getQuickTime={setQuickStartTime} margin="0 0 var(--small-indent) 0" />
          </>
        )}
        {(selectedStatus === Status.work ||
          (selectedStatus === Status.vacation && selectedVacationHours)) && (
          <>
            <Controller
              name="finishJob"
              control={control}
              render={({ field }) => (
                <DropdownList
                  type="single"
                  name="finishJob"
                  options={HoursOptions}
                  label={`${t(CalendarLngKeys.WhatTimeDidYouGoHome, {
                    ns: LocalesKeys.calendar,
                  })}?`}
                  buttonlabel={t(CommonLngKeys.Finish, { ns: LocalesKeys.common })}
                  height="40px"
                  width="100%"
                  margin="0 0 var(--small-indent) 0"
                  defaultValue={quickFinishTime ? quickFinishTime : null}
                  onChange={(value: string | string[]) => {
                    setQuickFinishTime(null);
                    field.onChange(value);
                  }}
                  errors={errors}
                  position="relative"
                />
              )}
            />
            <QuickTiming getQuickTime={setQuickFinishTime} margin="0 0 var(--small-indent) 0" />
          </>
        )}
        {selectedStatus === Status.work && (
          <Controller
            name="additionalHours"
            control={control}
            render={({ field }) => (
              <Checkbox
                name="additionalHours"
                errors={errors}
                register={register}
                onChange={(value: boolean) => field.onChange(value)}
                margin="0 0 var(--small-indent) 0"
              >
                <p>{`${t(CalendarLngKeys.IsThisAnExtraShift, { ns: LocalesKeys.calendar })}?`}</p>
              </Checkbox>
            )}
          />
        )}
        {selectedStatus === Status.vacation && (
          <Controller
            name="selectVacationHours"
            control={control}
            render={({ field }) => (
              <Checkbox
                name="selectVacationHours"
                errors={errors}
                register={register}
                onChange={(value: boolean) => field.onChange(value)}
                margin="0 0 var(--small-indent) 0"
              >
                <p>{t(CalendarLngKeys.SetYourOwnVacationTime, { ns: LocalesKeys.calendar })}</p>
              </Checkbox>
            )}
          />
        )}

        <Button
          type="submit"
          label={t(CalendarLngKeys.AddDay, { ns: LocalesKeys.calendar })}
          width="270px"
          height="40px"
        />
      </form>
      {isLoading && <Loader />}
    </>
  );
};

export default AddInformationForm;
