import DropdownList from 'components/UI/DropdownList';
import Button from 'components/UI/Button';
import Checkbox from 'components/UI/Checkbox';
import QuickTiming from 'components/UI/QuickTiming';
import useAddInformationForm from 'hooks/useAddInformationForm';
import DayOptions from 'utilities/DayOptions';
import HoursOptions from 'utilities/HoursOptions';
import { AddInformationFormProps } from 'types/props/AddInformationFormProps';
import { Status } from 'types/enums/StatusEnum';

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
  } = useAddInformationForm({ selectedDate });

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
          />
        )}
      />
      {selectedStatus === Status.work && (
        <>
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
                defaultValue={quickStartTime ? quickStartTime : null}
                onChange={(value: string | string[]) => {
                  setQuickStartTime(null);
                  field.onChange(value);
                }}
                errors={errors}
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
                defaultValue={quickFinishTime ? quickFinishTime : null}
                onChange={(value: string | string[]) => {
                  setQuickFinishTime(null);
                  field.onChange(value);
                }}
                errors={errors}
              />
            )}
          />
          <QuickTiming getQuickTime={setQuickFinishTime} margin="0 0 var(--small-indent) 0" />
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
                <p>Is this an extra shift?</p>
              </Checkbox>
            )}
          />
        </>
      )}

      <Button type="submit" label="Add day" width="400px" height="40px" />
    </form>
  );
};

export default AddInformationForm;
