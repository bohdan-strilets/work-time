import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { AddInformationFormInputs } from "types/inputs/AddInformationFormInputs";
import { HookProps } from "types/props/AddInformationFormProps";
import useModalWindow from "./useModalWindow";

const useAddInformationForm = ({ selectedDate }: HookProps) => {
  const { closeModal } = useModalWindow();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
  } = useForm<AddInformationFormInputs>();

  const selectedStatus = watch("status");

  const calculateWorkedHours = (start: string, finish: string): number => {
    const startTimeParts = start.split(":");
    const finishTimeParts = finish.split(":");

    const startHour = parseInt(startTimeParts[0], 10);
    const startMinute = parseInt(startTimeParts[1], 10);
    const finishHour = parseInt(finishTimeParts[0], 10);
    const finishMinute = parseInt(finishTimeParts[1], 10);

    let hoursDiff = finishHour - startHour;
    let minutesDiff = finishMinute - startMinute;

    if (minutesDiff < 0) {
      hoursDiff -= 1;
      minutesDiff += 60;
    }

    if (hoursDiff < 0) {
      hoursDiff += 24;
    }

    return hoursDiff + minutesDiff / 60;
  };

  const onSubmit: SubmitHandler<AddInformationFormInputs> = (data) => {
    if (selectedDate) {
      const date = `${selectedDate?.getDate()}-${
        selectedDate?.getMonth() + 1
      }-${selectedDate?.getFullYear()}`;
      if (data.startJob && data.finishJob) {
        const workedHours = calculateWorkedHours(data.startJob, data.finishJob);
        const result = {
          id: Date.now(),
          data: {
            [date]: {
              status: data.status,
              numberHoursWorked: workedHours,
              time: `${data.startJob}-${data.finishJob}`,
              workShiftNumber: Number(data.workShiftNumber),
              additionalHours: data.additionalHours,
            },
          },
        };
        const dataFromLS = window.localStorage.getItem("workingDays");
        const transformDataFromLS = dataFromLS ? JSON.parse(dataFromLS) : "";
        const dataToLS = [...transformDataFromLS, result];
        window.localStorage.setItem("workingDays", JSON.stringify(dataToLS));
      } else {
        const result = {
          id: Date.now(),
          data: {
            [date]: {
              status: data.status,
              numberHoursWorked: 0,
              time: "-",
              workShiftNumber: 0,
              additionalHours: false,
            },
          },
        };
        const dataFromLS = window.localStorage.getItem("workingDays");
        const transformDataFromLS = dataFromLS ? JSON.parse(dataFromLS) : "";
        const dataToLS = [...transformDataFromLS, result];
        window.localStorage.setItem("workingDays", JSON.stringify(dataToLS));
      }
    }
    closeModal();
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    Controller,
    control,
    selectedStatus,
  };
};

export default useAddInformationForm;
