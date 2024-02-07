import { useTranslation } from 'react-i18next';
import DropdownList from 'components/UI/DropdownList';
import Checkbox from 'components/UI/Checkbox';
import Button from 'components/UI/Button';
import QuickTiming from 'components/UI/QuickTiming';
import Loader from 'components/UI/Loader';
import { DayOptions, ShortDayOptions } from 'utilities/DayOptions';
import HoursOptions from 'utilities/HoursOptions';
import useEditInformationForm from 'hooks/useEditInformationForm';
import { EditInformationFormProps } from 'types/props/EditInformationFormProps';
import GetLineSegment from 'utilities/GetLineSegment';
import { Status } from 'types/enums/StatusEnum';
import { LocalesKeys } from 'types/enums/LocalesKeys';
import { CalendarLngKeys } from 'types/locales/CalendarLngKeys';
import { CommonLngKeys } from 'types/locales/CommonLngKeys';
import { useAppSelector } from 'hooks/useAppSelector';
import { getContractType } from '../../../redux/user/userSelectors';
import { ContractTypeEnum } from 'types/enums/ContractTypeEnum';

const EditInformationForm: React.FC<EditInformationFormProps> = ({ dayId, selectedDate }) => {
  const {
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
    isLoading,
  } = useEditInformationForm({ dayId, selectedDate });
  const { t } = useTranslation();
  const contractType = useAppSelector(getContractType);

  return (
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
            defaultValue={dayInfo?.status}
            position="relative"
          />
        )}
      />
      {(selectedStatus === Status.work || selectedStatus === Status.vacation) && (
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
                onChange={(value: string | string[]) => {
                  setQuickStartTime(null);
                  field.onChange(value);
                }}
                errors={errors}
                defaultValue={
                  dayInfo?.time && !quickStartTime
                    ? GetLineSegment(dayInfo?.time, 0, 5)
                    : quickStartTime
                }
                position="relative"
              />
            )}
          />
          <QuickTiming getQuickTime={setQuickStartTime} margin="0 0 var(--small-indent) 0" />
        </>
      )}
      {(selectedStatus === Status.work || selectedStatus === Status.vacation) && (
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
                onChange={(value: string | string[]) => {
                  setQuickStartTime(null);
                  field.onChange(value);
                }}
                errors={errors}
                defaultValue={
                  dayInfo?.time && !quickFinishTime
                    ? GetLineSegment(dayInfo?.time, 6, dayInfo.time.length)
                    : quickFinishTime
                }
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
              defaultValue={dayInfo?.additionalHours}
            >
              <p>{`${t(CalendarLngKeys.IsThisAnExtraShift, { ns: LocalesKeys.calendar })}?`}</p>
            </Checkbox>
          )}
        />
      )}
      {isLoading && <Loader />}
      <Button
        type="submit"
        label={t(CalendarLngKeys.ChangeDay, { ns: LocalesKeys.calendar })}
        width="100%"
        height="40px"
      />
    </form>
  );
};

export default EditInformationForm;
