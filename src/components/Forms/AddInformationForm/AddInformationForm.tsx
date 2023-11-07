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
            label="Выберети к какому типу принадлежит день"
            buttonlabel="Day type"
            height="40px"
            width="100%"
            margin="0 0 var(--small-indent) 0"
            onChange={(value: string | string[]) => field.onChange(value)}
            errors={errors}
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
            label="Начало смены"
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
            label="Выберети номер смены"
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
            <p>Укажите если смена была дополнительной</p>
          </Checkbox>
        )}
      />

      <Button type="submit" label="Add day" width="400px" height="40px" />
    </form>
  );
};

export default AddInformationForm;
