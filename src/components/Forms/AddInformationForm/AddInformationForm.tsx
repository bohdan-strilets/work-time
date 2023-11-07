import DropdownList from "components/UI/DropdownList";
import Button from "components/UI/Button";
import Checkbox from "components/UI/Checkbox";
import useAddInformationForm from "hooks/useAddInformationForm";
import DayOptions from "utilities/DayOptions";
import HoursOptions from "utilities/HoursOptions";
import ShiftOptions from "utilities/ShiftOptions";

const AddInformationForm: React.FC<{}> = () => {
  const { register, handleSubmit, errors, onSubmit, Controller, control } =
    useAddInformationForm();

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
            onChange={(value: string | string[]) => field.onChange(value)}
            errors={errors}
          />
        )}
      />
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
          >
            <p>Is this an extra shift?</p>
          </Checkbox>
        )}
      />

      <Button type="submit" label="Add day" width="400px" height="40px" />
    </form>
  );
};

export default AddInformationForm;
