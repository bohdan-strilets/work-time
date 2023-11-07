import DropdownList from "components/UI/DropdownList";
import Button from "components/UI/Button";
import Checkbox from "components/UI/Checkbox";
import useAddInformationForm from "hooks/useAddInformationForm";

export const DayOptions = [
  {
    id: 1,
    label: "Work day",
    value: "work",
  },
  {
    id: 2,
    label: "Day off",
    value: "day-off",
  },
  {
    id: 3,
    label: "Vacation",
    value: "vacation",
  },
  {
    id: 4,
    label: "Sick leave",
    value: "sick-leave",
  },
];

export const HoursOptions = [
  {
    id: 1,
    label: "00:00",
    value: "00:00",
  },
  {
    id: 2,
    label: "01:00",
    value: "01:00",
  },
  {
    id: 3,
    label: "02:00",
    value: "02:00",
  },
  {
    id: 4,
    label: "03:00",
    value: "03:00",
  },
  {
    id: 5,
    label: "04:00",
    value: "04:00",
  },
  {
    id: 6,
    label: "05:00",
    value: "05:00",
  },
  {
    id: 7,
    label: "06:00",
    value: "06:00",
  },
  {
    id: 8,
    label: "07:00",
    value: "07:00",
  },
  {
    id: 9,
    label: "08:00",
    value: "08:00",
  },
  {
    id: 10,
    label: "09:00",
    value: "09:00",
  },
  {
    id: 11,
    label: "10:00",
    value: "10:00",
  },
  {
    id: 12,
    label: "11:00",
    value: "11:00",
  },
  {
    id: 13,
    label: "12:00",
    value: "12:00",
  },
  {
    id: 14,
    label: "13:00",
    value: "13:00",
  },
  {
    id: 15,
    label: "14:00",
    value: "14:00",
  },
  {
    id: 16,
    label: "15:00",
    value: "15:00",
  },
  {
    id: 17,
    label: "16:00",
    value: "16:00",
  },
  {
    id: 18,
    label: "17:00",
    value: "17:00",
  },
  {
    id: 19,
    label: "18:00",
    value: "18:00",
  },
  {
    id: 20,
    label: "19:00",
    value: "19:00",
  },
  {
    id: 21,
    label: "20:00",
    value: "20:00",
  },
  {
    id: 22,
    label: "21:00",
    value: "21:00",
  },
  {
    id: 23,
    label: "22:00",
    value: "22:00",
  },
  {
    id: 24,
    label: "23:00",
    value: "23:00",
  },
];

export const ShiftOptions = [
  {
    id: 1,
    label: "I",
    value: "1",
  },
  {
    id: 2,
    label: "II",
    value: "2",
  },
];

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
