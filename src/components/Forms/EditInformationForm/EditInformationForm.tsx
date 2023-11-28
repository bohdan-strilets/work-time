import DropdownList from 'components/UI/DropdownList';
import Checkbox from 'components/UI/Checkbox';
import Button from 'components/UI/Button';
import QuickTiming from 'components/UI/QuickTiming';
import DayOptions from 'utilities/DayOptions';
import HoursOptions from 'utilities/HoursOptions';
import ShiftOptions from 'utilities/ShiftOptions';
import useEditInformationForm from 'hooks/useEditInformationForm';
import { EditInformationFormProps } from 'types/props/EditInformationFormProps';
import GetLineSegment from 'utilities/GetLineSegment';

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
  } = useEditInformationForm({ dayId, selectedDate });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="status"
        control={control}
        render={({ field }) => (
          <DropdownList
            type="single"
            name="status"
            options={DayOptions}
            label="Did you work or rest today?"
            buttonlabel="Today"
            height="40px"
            width="100%"
            margin="0 0 var(--small-indent) 0"
            onChange={(value: string | string[]) => field.onChange(value)}
            errors={errors}
            required={true}
            defaultValue={dayInfo?.status}
          />
        )}
      />
      <Controller
        name="startJob"
        control={control}
        render={({ field }) => (
          <DropdownList
            type="single"
            name="startJob"
            options={HoursOptions}
            label="What time did you arrive at work?"
            buttonlabel="Start"
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
          />
        )}
      />
      <QuickTiming getQuickTime={setQuickStartTime} margin="0 0 var(--small-indent) 0" />
      <Controller
        name="finishJob"
        control={control}
        render={({ field }) => (
          <DropdownList
            type="single"
            name="finishJob"
            options={HoursOptions}
            label="What time did you go home?"
            buttonlabel="Finish"
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
          />
        )}
      />
      <QuickTiming getQuickTime={setQuickFinishTime} margin="0 0 var(--small-indent) 0" />
      <Controller
        name="workShiftNumber"
        control={control}
        render={({ field }) => (
          <DropdownList
            type="single"
            name="workShiftNumber"
            options={ShiftOptions}
            label="Is it day or night?"
            buttonlabel="Shift"
            height="40px"
            width="100%"
            margin="0 0 var(--small-indent) 0"
            onChange={(value: string | string[]) => field.onChange(value)}
            errors={errors}
            defaultValue={dayInfo?.workShiftNumber.toString()}
          />
        )}
      />
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
            <p>Is this an extra shift?</p>
          </Checkbox>
        )}
      />
      <Button type="submit" label="Changed day" width="400px" height="40px" />
    </form>
  );
};

export default EditInformationForm;
